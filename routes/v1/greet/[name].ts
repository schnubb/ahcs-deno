import {
  HttpRequest,
  HttpResponse
} from "https://deno.land/x/jurassic/@types/http.d.ts";


export const method = ["GET"];

export default (req: HttpRequest, res: HttpResponse) => {
  console.log(req);
  return `Hello ${req.params.name}`;
};
