
export default function BtnFullRounded({ children, onClick}) {
    return (
        <button
            className={`bg-black rounded-full px-6 py-2 text-lg font-bold text-white 
                        cursor-pointer hover:scale-110 w-fit
                `
            }
            onClick={(e) => {
                if(onClick) {
                    onClick(e)
                }
            }}
        >
            {children}
        </button>
    );
}