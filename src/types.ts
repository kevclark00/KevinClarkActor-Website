export type Design = {
  /** Two-digit ID, e.g. "01" — used in URL hash and switcher label. */
  id: string;
  /** Short display name shown in the switcher tooltip. */
  name: string;
  /** Short one-line note describing the visual concept. */
  blurb: string;
  /** The page component itself. Should render its own H1 and layout, then <IntakeForm /> in the footer. */
  Component: React.ComponentType;
};

export type IntakeSubmission = {
  name: string;
  email: string;
  message: string;
  /** Which design was active when submitted — useful telemetry for Kevin. */
  designId?: string;
};

declare global {
  // stringtune (lightweight CSS animation lib) attaches a global initializer.
  // The browser agent will finalize this typing once docs are in. For now we
  // declare a permissive shape so the build doesn't fail if it is invoked.
  interface Window {
    stringtune?: unknown;
  }
}
