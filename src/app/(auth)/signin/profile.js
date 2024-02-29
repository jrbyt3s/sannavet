import { verify } from 'jsonwebtoken'

export default async function Profile(access_token) {



    try {
        const user = verify(access_token, 'django-insecure-0qrf%hgt6$hyyn9n=9pa^5khei%qj)2kth@11%q$m-q68ydt#u');
        console.log(user);
        localStorage.setItem('userProfile',
            JSON.stringify({
                user_id: user.user_id,
                username: user.username,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                role: user.role
            }));
        try {
            if (user.user_id) {
                const response2 = await fetch(`https://sannavet-api.onrender.com/clients/${user.user_id}/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access_token}`,
                    },

                });
                if (response2.ok) {
                    const responseData = await response2.json();
                    
                    console.log(responseData)
                }

            }

        } catch (error) {
            console.error('Error en la solicitud:', error);
        }

    } catch (error) {
        console.error('Error decoding token:', error.message);
        localStorage.setItem('userProfile',
            JSON.stringify({
                user_id: 0,
                username: 'username',
                email: 'usuario@example.com',
                first_name: 'usuario',
                last_name: '',
                role: 'cliente'
            }
            )
        );
    }


}