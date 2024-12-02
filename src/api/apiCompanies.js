import SupabaseClient from "@/utils/supabase";

export async function getCompanies(token) {
    const supabase = await SupabaseClient(token);

    const { data, error } = await supabase.from("companies").select("*");

    if (error) {
        console.error("Error Fetching Companies: ", error);
        return null;
    }

    return data;
}