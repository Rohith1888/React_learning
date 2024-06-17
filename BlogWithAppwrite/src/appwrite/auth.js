import config from "../config/config";
import { Client, Account, ID } from "appwrite";
export class AuthService{
    client  = new Client();
    account;
    constructor()
    {
        this.client
        .setEndpoint(config.appwrite_url) 
        .setProject(config.appwrite_project_id);
        
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name})
    {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount)
                {
                    return this.login({email, password})
                }
                else{
                    return userAccount;
                }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password})
    {
        try {
            const session = await this.account.createEmailPasswordSession(email, password)
            return session;
            
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser()
    {
        try {

            return await this.account.get();
            
        } catch (error) {
            throw error;
            
        }

        return null;
    }

    async logout()
    {

    
    try {
        return  await this.account.deleteSessions();
        
    } catch (error) {
        throw error;
        
    }
}
   


}

const authService = new AuthService()
export default authService;