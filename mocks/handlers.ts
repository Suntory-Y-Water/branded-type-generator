import { http, HttpResponse } from 'msw';

// https://github.com/mswjs/examples/tree/main/examples/with-vitest
// msw: API モックを作成するために使用。
export const handlers = [
  http.get('https://api.example.com/user', () => {
    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),
];
