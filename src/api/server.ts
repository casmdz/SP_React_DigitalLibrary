// https://github.com/casmdz/SP_DigitalLibrary/blob/main/app/api/routes.py

const token = 'be84dcf573b84f8108cea8c871b27fb0e15713c61dea0617'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://check-meowt.onrender.com/api/books`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        }); 
        if (!response.ok){
            console.log('Failed to get')
            throw new Error('failed to fetch data from the server')
        }
        return await response.json()
    },
    create: async (data: any = {}) => {
        try {
            const response = await fetch(`https://check-meowt.onrender.com/api/books`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Failed to create new data on the server. Status: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Network error:', error);
            throw error; 
        }
    },

    update: async (id: string, data: any ={}) => {
        const response = await fetch (`https://check-meowt.onrender.com/api/books/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data) 
        }) 
        if (!response.ok) {
            throw new Error('Failed to update data on the server.')
        }
        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch (`https://check-meowt.onrender.com/api/books/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        }) 
        if (!response.ok){
            throw new Error('Failed to delete data on the server') 
        }
        return;
    },

};