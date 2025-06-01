
export default function BtnFullRounded({ children, onClick, disable}) {
    return (
        <button
            className={`rounded-full px-6 py-2 text-lg font-bold text-white 
                         w-fit select-none
                        ${disable?'bg-gray-500': 'bg-black cursor-pointer hover:scale-110'}
                `
            }
            onClick={(e) => {
                if(!disable && onClick) {
                    onClick(e)
                }
            }}
        >
            {children}
        </button>
    );
}