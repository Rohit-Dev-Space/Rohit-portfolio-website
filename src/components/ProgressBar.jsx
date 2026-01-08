import * as Progress from "@radix-ui/react-progress";

export default function ProgressBar({ value }) {
    return (
        <Progress.Root
            className="relative h-3 w-full overflow-hidden rounded-full bg-neutral-200"
            value={value}
        >
            <Progress.Indicator
                className="h-full w-full bg-linear-to-r from-teal-300  rounded-2xl to-teal-700 transition-transform duration-700 ease-out"
                style={{ transform: `scaleX(${value / 100})` }}
            />
        </Progress.Root>
    );
}
