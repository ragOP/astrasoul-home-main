import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <div key={id} {...props}>
            {title && <div>{title}</div>}
            {description && <div>{description}</div>}
            {action}
          </div>
        );
      })}
    </div>
  );
}
