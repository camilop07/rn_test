/**
 * It returns an AbortController object
 * @returns A new AbortController object.
 */
export const loadAbort = () => {
  const controller = new AbortController();
  return controller;
};
