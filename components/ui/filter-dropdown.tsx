"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "radix-ui"
import { ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FilterDropdownOption {
  value: string
  label: string
}

export interface FilterDropdownProps {
  /** Field label rendered above the trigger (Universal/Label M, #003D84) */
  label: string
  options: FilterDropdownOption[]
  value?: string
  onValueChange?: (value: string) => void
  /** Placeholder shown when no value is selected */
  placeholder?: string
  disabled?: boolean
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * CIC filter dropdown — source: Figma nodes 67:6995 (DropdownFilter) and
 * 67:6990 (DropdownListStates).
 *
 * Visual spec:
 *   Trigger  — w-full, bg white, border 1px #9DACBF, radius 4px, px-2 py-3
 *   Label    — Universal/Label M, color #003D84 (--cic-text-heading)
 *   Body     — Universal/Body S, color #394D60 (--cic-text-body)
 *   Item default  — bg #F2F6F9, border-b #D9E1E6, px-4 py-2
 *   Item hover    — bg #9DACBF, text white, border-b transparent
 *   Scrollbar     — 4px wide, track #9DACBF, thumb #394D60 rounded-full
 *   Trigger→list gap — 4px (sideOffset)
 *   Caret icon    — 24px, #F18702 (--orange-100), rotates on open/close
 */
export function FilterDropdown({
  label,
  options,
  value,
  onValueChange,
  placeholder = "All",
  disabled = false,
  className,
}: FilterDropdownProps) {
  const triggerId = React.useId()

  return (
    <div className={cn("flex w-[182px] flex-col gap-2", className)}>
      {/* Label — Universal/Label M */}
      <label
        htmlFor={triggerId}
        className="universal-label-m text-[var(--cic-text-heading)] select-none"
      >
        {label}
      </label>

      <SelectPrimitive.Root
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
      >
        {/*
         * Trigger
         * Dimensions: full width, px-2 (8px) py-3 (12px)
         * Border: 1px solid --cic-surface-hover (#9DACBF), radius 4px
         * Focus: ring offset using --cic-surface-hover at 50% opacity
         * Open state: border darkens to --cic-text-body
         */}
        <SelectPrimitive.Trigger
          id={triggerId}
          className={cn(
            "group flex w-full items-center justify-between gap-6 rounded-[4px]",
            "border border-[var(--cic-surface-hover)] bg-white",
            "px-2 py-3",
            "universal-body-s text-[var(--cic-text-body)]",
            "outline-none transition-colors duration-150",
            "focus-visible:border-[var(--cic-text-body)] focus-visible:ring-2 focus-visible:ring-[#9DACBF]/50",
            "data-[state=open]:border-[var(--cic-text-body)]",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "data-placeholder:text-[var(--cic-text-body)]/60",
          )}
        >
          {/* Selected value or placeholder */}
          <SelectPrimitive.Value placeholder={placeholder} />

          {/*
           * Caret icon — 24px orange (#F18702 = --orange-100)
           * Default (closed): rotated 180° → points down
           * Open: 0° → points up (matches Figma "Scrolled" state)
           */}
          <SelectPrimitive.Icon asChild>
            <ChevronUpIcon
              className={cn(
                "size-6 shrink-0 text-[var(--orange-100)] transition-transform duration-200",
                "rotate-180 group-data-[state=open]:rotate-0",
              )}
            />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            position="popper"
            sideOffset={4}
            className={cn(
              "relative z-50 w-(--radix-select-trigger-width)",
              "origin-(--radix-select-content-transform-origin)",
              "data-[state=open]:animate-in data-[state=open]:fade-in-0",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
            )}
          >
            <SelectPrimitive.Viewport
              className={cn(
                "max-h-[380px] overflow-y-auto",
                // Custom CIC scrollbar (4px, track #9DACBF, thumb #394D60)
                "[scrollbar-width:thin] [scrollbar-color:var(--cic-text-body)_var(--cic-surface-hover)]",
                "[&::-webkit-scrollbar]:w-1",
                "[&::-webkit-scrollbar-track]:bg-[var(--cic-surface-hover)]",
                "[&::-webkit-scrollbar-thumb]:rounded-full",
                "[&::-webkit-scrollbar-thumb]:bg-[var(--cic-text-body)]",
              )}
            >
              {options.map((option) => (
                /*
                 * List item
                 * Default: bg --cic-surface, border-b --cic-border, text --cic-text-body
                 * Hover (highlighted): bg --cic-surface-hover, text white, border-b transparent
                 * Checked (selected): no additional visual change beyond highlight
                 */
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  className={cn(
                    "flex cursor-default select-none items-center",
                    "border-b border-[var(--cic-border)] bg-[var(--cic-surface)]",
                    "px-4 py-2",
                    "universal-body-s text-[var(--cic-text-body)]",
                    "outline-none transition-colors duration-100",
                    // Hover / keyboard-focus state
                    "data-[highlighted]:border-b-transparent data-[highlighted]:bg-[var(--cic-surface-hover)] data-[highlighted]:text-white",
                    // Remove bottom border on last item
                    "last:border-b-0",
                  )}
                >
                  <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </div>
  )
}
