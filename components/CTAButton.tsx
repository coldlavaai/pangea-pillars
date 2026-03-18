interface CTAButtonProps {
  href: string;
  text: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function CTAButton({ href, text, variant = 'primary', className = '' }: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition transform hover:scale-105";
  const variantClasses = variant === 'primary' 
    ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg" 
    : "bg-gray-700 hover:bg-gray-600 text-white";
  
  return (
    <a 
      href={href} 
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {text}
    </a>
  );
}
