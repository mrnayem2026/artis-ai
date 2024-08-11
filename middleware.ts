import {  createRouteMatcher } from "@clerk/nextjs/server";


export default createRouteMatcher(["/api/webhooks/clerk"]);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};