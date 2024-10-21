
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';


const useRole = () =>{
    const {user, loading} = useAuth();
    const axiosPublic = useAxiosPublic();

    const {data: role = '', isLoading} = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async() =>{
            try{
                const {data} = await axiosPublic.get(`/users/role/${user?.email}`);
                return data.role;
            } catch(error) {
                console.error('Error fetching user role:', error);
                throw new Error('Failed to fetch user role');
            }
        },

    });
    return [role, isLoading];
};

export default useRole;