import { useEffect, useState } from "react";
import { getUserId, fetchLikes, checkLiked, likePortfolio } from "../utils/likeHelpers";
import { Heart, ThumbsUp } from "lucide-react";

export default function LikeButton() {

    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const userId = getUserId();

    useEffect(() => {
        async function init() {
            const total = await fetchLikes();
            setLikes(total);

            const alreadyLiked = await checkLiked(userId);
            setLiked(alreadyLiked);
        }

        init();
    }, []);

    async function handleLike() {
        if (liked) return;

        await likePortfolio(userId);

        setLikes(prev => prev + 1);
        setLiked(true);
    }

    return (
        <div className="flex flex-col items-center gap-2 md:scale-100 scale-70">
            <button
                onClick={handleLike}
                className={`flex items-center justify-center cursor-pointer border w-10 h-10 border-white rounded-full transition-all duration-300 ${liked ? "bg-white/80 scale-105" : "bg-transparent hover:bg-white/10"
                    }`}
            >
                <Heart
                    size={22}
                    className="text-white"
                    fill={liked ? "#f52e20" : "none"}
                />
            </button>

            <p className="text-gray-400 text-xs flex items-center justify-center gap-1"><span className="mt-1">{likes}</span> <ThumbsUp size={15} /> </p>
        </div>
    );
}