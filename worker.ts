import handler from 'vinext/server/fetch-handler';

const worker = {
  fetch(request: Request, env: Record<string, never>, ctx: ExecutionContext) {
    const url = new URL(request.url);

    if (url.hostname === 'www.codnroid.com') {
      url.hostname = 'codnroid.com';
      return Response.redirect(url, 301);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
