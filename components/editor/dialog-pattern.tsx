"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface DialogPatternProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  footerActions?: React.ReactNode
  children?: React.ReactNode
}

/**
 * Reusable dialog pattern for future use.
 * Wraps shadcn Dialog components with consistent structure.
 */
export function DialogPattern({
  open,
  onOpenChange,
  title,
  description,
  footerActions,
  children,
}: DialogPatternProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-3xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        {children}

        {footerActions && (
          <DialogFooter>{footerActions}</DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
