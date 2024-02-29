'use client'
import {useRouter} from 'next/navigation'


export default function Signout() {
    const router = useRouter()

    try {
        
        localStorage.removeItem('userProfile');
        sessionStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        router.push('/');

    } catch (error) {
        router.push('/');
    }

  return (
    <div>'logout'</div>
  )
}
