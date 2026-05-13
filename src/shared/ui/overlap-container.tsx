type NativeDivProps = Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children">;

export function OverlapContainer({ children }: NativeDivProps) {
  return (
    <div className="flex flex-col rounded-[42px] shadow-[0_-20px_30px_0_oklch(0%_0_0/0.1),0_20px_30px_0_oklch(0%_0_0/0.1)]">
      {children}
    </div>
  );
}
