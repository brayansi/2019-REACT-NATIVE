import { ApiService } from './ApiService';
const endpoint = 'tool';

export const TodoService = {
    list(){
        return ApiService.get(endpoint);
    },
    create(item){
        return ApiService.post(endpoint, item);
    },
    remove(id){
        return ApiService.delete(endpoint, id);
    }
}