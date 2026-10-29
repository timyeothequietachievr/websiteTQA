/**
 * Shared Email Octopus helpers for the masterclass replay gate.
 * Form opens as EO’s native popup; on success we redirect to YouTube.
 */

export const MASTERCLASS_REPLAY_EO_FORM_ID = "96ef9e38-8a7a-11f1-8c9e-5dbe765ef454";
export const MASTERCLASS_REPLAY_YOUTUBE_URL = "https://youtu.be/vgsnCR-8ezE";

const EO_SCRIPT_LOADED_ATTR = "data-eo-loaded";
export const MASTERCLASS_REPLAY_EO_SUCCESS_EVENT = "emailoctopus:form.success";

function getForm(formId: string): HTMLElement | null {
  return document.querySelector(`[data-form="${formId}"]:not(script)`) as HTMLElement | null;
}

function getScript(formId: string): HTMLScriptElement | null {
  return document.querySelector(`script[data-form="${formId}"]`) as HTMLScriptElement | null;
}

function showForm(form: HTMLElement) {
  form.style.removeProperty("display");
  form.classList.add("active");
}

function isVisible(form: HTMLElement) {
  return form.classList.contains("active") && getComputedStyle(form).display !== "none";
}

/**
 * Load EO script and wait until it has fully executed.
 * Form node appears mid-script; opening too early gets overwritten by EO’s hide.
 */
export function ensureMasterclassReplayEoReady(
  formId: string = MASTERCLASS_REPLAY_EO_FORM_ID,
): Promise<HTMLElement | null> {
  const src = `https://eomail5.com/form/${formId}.js`;

  return new Promise((resolve) => {
    const existingForm = getForm(formId);
    const existingScript = getScript(formId);

    if (existingForm && existingScript?.getAttribute(EO_SCRIPT_LOADED_ATTR) === "1") {
      resolve(existingForm);
      return;
    }

    const finish = (scriptEl: HTMLScriptElement) => {
      scriptEl.setAttribute(EO_SCRIPT_LOADED_ATTR, "1");
      window.setTimeout(() => resolve(getForm(formId)), 80);
    };

    if (existingScript) {
      if (existingScript.getAttribute(EO_SCRIPT_LOADED_ATTR) === "1") {
        resolve(getForm(formId));
        return;
      }
      existingScript.addEventListener("load", () => finish(existingScript), { once: true });
      window.setTimeout(() => finish(existingScript), 400);
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.setAttribute("data-form", formId);
    script.addEventListener("load", () => finish(script), { once: true });
    script.addEventListener("error", () => resolve(null), { once: true });
    document.body.appendChild(script);
  });
}

export async function openMasterclassReplayEoForm(
  formId: string = MASTERCLASS_REPLAY_EO_FORM_ID,
): Promise<boolean> {
  const form = await ensureMasterclassReplayEoReady(formId);
  if (!form) return false;
  for (let i = 0; i < 12; i += 1) {
    showForm(form);
    await new Promise((r) => window.setTimeout(r, 40));
    if (isVisible(form)) return true;
  }
  return isVisible(form);
}

/** Redirect to YouTube after EO signup success (wins race against EO’s own redirect). */
export function bindMasterclassReplayEoSuccessRedirect(
  successRedirectUrl: string,
  formId: string = MASTERCLASS_REPLAY_EO_FORM_ID,
): () => void {
  const go = () => {
    window.top!.location.href = successRedirectUrl;
  };

  const onSuccess = (event: Event) => {
    const detail = (event as CustomEvent<{ form_id?: string }>).detail;
    if (detail?.form_id && detail.form_id !== formId) return;
    go();
    const intervalId = window.setInterval(go, 16);
    window.setTimeout(() => window.clearInterval(intervalId), 400);
  };

  document.addEventListener(MASTERCLASS_REPLAY_EO_SUCCESS_EVENT, onSuccess);
  return () => {
    document.removeEventListener(MASTERCLASS_REPLAY_EO_SUCCESS_EVENT, onSuccess);
  };
}
