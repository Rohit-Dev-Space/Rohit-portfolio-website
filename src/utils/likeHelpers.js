import { supabase } from "../utils/supabase";

export function getUserId() {
    let id = localStorage.getItem("portfolio_user_id");

    if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem("portfolio_user_id", id);
    }

    return id;
}

export async function fetchLikes() {
    const { count } = await supabase
        .from("portfolio_likes")
        .select("*", { count: "exact", head: true });

    return count;
}

export async function checkLiked(userId) {
    const { data } = await supabase
        .from("portfolio_likes")
        .select("*")
        .eq("user_id", userId);

    return data.length > 0;
}

export async function likePortfolio(userId) {
    const { data, error } = await supabase
        .from("portfolio_likes")
        .insert({ user_id: userId });

    if (error) {
        console.error("Supabase insert error:", error);
    }

    return data;
}