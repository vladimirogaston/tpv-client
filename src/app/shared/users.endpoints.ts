import { environment } from "../../environments/environment";

export class UserEndpoints {
    static auth: string = environment.REST_USER + "/authentication";
}
