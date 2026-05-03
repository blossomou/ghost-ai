"use client"

import { Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 bg-black/20" onClick={onClose}>
      <aside
        className="absolute top-0 left-0 h-full w-72 border-r bg-background animate-in slide-in-from-left duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex h-12 items-center justify-between border-b px-4">
          <h2 className="text-sm font-medium text-foreground">Projects</h2>
          <Button variant="ghost" size="icon-xs" onClick={onClose}>
            <X className="size-4" />
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="my-projects" className="flex flex-col h-[calc(100%-3rem)]">
          <div className="px-4 pt-3">
            <TabsList className="w-full">
              <TabsTrigger value="my-projects" className="flex-1 text-xs">
                My Projects
              </TabsTrigger>
              <TabsTrigger value="shared" className="flex-1 text-xs">
                Shared
              </TabsTrigger>
            </TabsList>
          </div>

          <ScrollArea className="flex-1 px-4 py-3">
            <TabsContent value="my-projects" className="mt-0 h-full">
              <EmptyPlaceholder />
            </TabsContent>
            <TabsContent value="shared" className="mt-0 h-full">
              <EmptyPlaceholder />
            </TabsContent>
          </ScrollArea>

          {/* Footer */}
          <div className="border-t p-4">
            <Button variant="outline" className="w-full gap-1.5 text-xs">
              <Plus className="size-3.5" />
              New Project
            </Button>
          </div>
        </Tabs>
      </aside>
    </div>
  )
}

function EmptyPlaceholder() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 py-8 text-center">
      <p className="text-xs text-muted-foreground">No projects yet</p>
    </div>
  )
}
