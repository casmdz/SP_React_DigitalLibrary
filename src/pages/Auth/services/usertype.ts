// https://github.com/casmdz/DigitalLibrary_Render/blob/main/models.py

export interface User {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    image_file?: string | undefined;
    password: string;
    g_auth_verify: Boolean;
    token: string | undefined;
}