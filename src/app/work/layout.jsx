import { ActiveCardProvider } from "@/lib/hooks/useActiveCard";

export default function WorkLayout({ children }) {
  return (
    <ActiveCardProvider>
      {children}
    </ActiveCardProvider>
  )
}
