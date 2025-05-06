interface LabelProps {
    children?: any
}


export default function Label({ children }: LabelProps) {
    return (
      <label className="block text-sm font-medium text-gray-700">{children}</label>
    );
  }