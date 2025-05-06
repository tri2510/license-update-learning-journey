// Create button component with solid and outline variant tailwind style

interface ButtonProps {
    children?: any
    variant?: string
  }

export default function Btn({ children, variant }: ButtonProps) {
    return (
        <button
            className={`inline-flex items-center px-4 py-2 border border-transparent 
                rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
                 ${variant === "outline" ? "bg-white text-primary-700 hover:bg-primary-50" : ""}`}
        >
            {children}
        </button>
    );
}