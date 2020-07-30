import {
  HttpRequest,
  HttpResponse
} from "https://deno.land/x/jurassic/@types/http.d.ts";


export default (req: HttpRequest, res: HttpResponse) => {
  return "Hello there, put a name in the url.";
};
