import { cn } from "@/lib/utils"
import { PProps } from "./PTag.props";

export const PTag = ({ children, size = "m", className }: PProps): JSX.Element => {
    let classSize = 'text-lg text-textColor font-medium laptop:text-xl desktop:text-2xl';

    switch (size) {
        case 's':
            classSize = 'text-sm text-textColor font-medium laptop:text-lg'
            break;
        case 'l':
            classSize = 'text-xl text-textColor font-medium laptop:text-2xl desktop:text-3xl'
            break;

        default:
            break;
    }

    return <p className={cn(classSize, className)}>{children}</p>;

}