"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import { cn } from "@/lib/utils";

const machineGroups = [
  {
    title: "Web Offset Machines (High Speed)",
    items: [
      "Orient Web Offset: 2 nos, 8 colour (4+4), 30,000/hr, 32 pages A4",
      "Fast 300 Web Offset: 1 no, 4 colour, 30,000/hr",
      "NAPH Graphics Koncept: 1 no, 8 colour (4+4), 30,000/hr",
      "Mark-62 from Manugraph: 3 nos, 5 colour, 25,000/hr, barcode & QR capable",
      "RO-62 Web Offset: 1 no, 4 colour, 25,000/hr",
    ],
  },
  {
    title: "Computer Stationery Machines",
    items: [
      "FlexiBobine 12 web: 1 no, 5 colour, 45,000 sheets/hr",
      "Muller-Martini Progress 520: 1 no, 5 colour, UV ink dryer, 100 M/min",
      "Rollon Engineering (4 colour): 1 no, 36,000/hr",
      "Rollon Engineering (3 colour): 1 no, 36,000/hr",
      "Geekay Machinery (Multi colour): 3 nos, 8,000/hr",
    ],
  },
  {
    title: "Plate Making & Pre-Press",
    items: [
      "Basys Print CTCP Machine (Model 860): 1 no, fully automatic, 80 plates/hr, 3000 DPI",
      "Basys Print CTCP Machine (Model 850): 1 no, 40 plates/hr, 1500 DPI",
      "DTP Systems: 30 nos, high configured",
      "Scanners: 10 nos",
      "Laser Printers: 10 nos A4 + 10 nos A3",
    ],
  },
  {
    title: "Binding & Finishing",
    items: [
      "Perfect Binding machines: 6 machines (single clamp, six clamp, five clamp, four clamp — from Print tools, Well Bond, Muller Martini, Appu 1500)",
      "Stitching Machines: 20 nos",
      "Gathering Machine: 1 no (Hans Muller, Switzerland) — inline gathering, pinning, cutting",
    ],
  },
  {
    title: "Cutting & Security Finishing",
    items: [
      "Cutting Machines: 10 nos total (Japan, UK, Germany, India)",
      "Pinning Machines: 16 nos (Stander Print Equipments)",
      "Box Strapping: 10 machines (ITW Signode)",
      "Hologram Stamping Machine: 1 no (inline, MICR numbering)",
      "Variable Data Printing: Konica Minolta 7120 & 6120",
    ],
  },
  {
    title: "Support Infrastructure",
    items: [
      "Generator: 160 KVA Genset (2 nos)",
      "Plate Exposure: 4 nos (Oshio Graphics, India)",
      "Sheet Fed Offset: Lithrone Model A37P (4 colour, up to 640x940mm)",
    ],
  },
] as const;

export function MachineCategoriesAccordion() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {machineGroups.map((group, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const headerId = `${baseId}-header-${index}`;

        return (
          <div
            key={group.title}
            className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm"
          >
            <h3>
              <button
                type="button"
                id={headerId}
                className={cn(
                  "flex w-full min-w-0 items-center justify-between gap-3 px-4 py-4 text-left text-base font-semibold text-primary transition-colors sm:px-5 sm:text-lg",
                  isOpen ? "bg-primary/5" : "bg-white hover:bg-muted/80"
                )}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className="min-w-0 break-words pr-2">{group.title}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-accent transition-transform duration-300 ease-out motion-reduce:transition-none",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <ul
                  className="space-y-2 border-t border-border px-4 py-4 sm:px-5 sm:py-5"
                  aria-hidden={!isOpen}
                >
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex min-w-0 gap-2 text-sm leading-relaxed text-muted-foreground sm:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="min-w-0 break-words">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
