import { ref } from "vue";

export function useAsyncLoading<K, V>(asyncFunction: (data: K) => Promise<V>) {
    const loading = ref(false)
    async function sendRequest(data: K) {
        loading.value = true
        try {
            const res = await asyncFunction(data)
            return res
        } finally {
            loading.value = false
        }

    }

    return {
        loading,
        sendRequest
    }

}