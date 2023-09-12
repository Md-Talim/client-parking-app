/**
 * Generates a URL for the specified route name and parameters.
 *
 * @param {string} name - The name of the route.
 * @param {Record<string, string>} params - The parameters for the route.
 * @returns {string} - The generated URL.
 */
function route(name: string, params: Record<string, string> = {}): string {
  const routeNames: Record<string, string> = {
    home: '/',
    register: '/register',
  };
  let url: string = routeNames[name];

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      url = url.replace(`:${key}`, params[key]);
    }
  }

  return url;
}

export { route };
