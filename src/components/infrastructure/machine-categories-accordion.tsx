"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import { cn } from "@/lib/utils";

const machineGroups = [
  {
    title: "Web Offset Machines (High Speed)",
    items: [
      "Orient Web Offset: 2 units, 8 colour (4+4), 30,000 an hour, 32 pages A4",
      "FAST 300 Web Offset: 1 unit, 4 colour, 30,000 an hour",
      "NAPH Graphics Koncept: 1 unit, 8 colour (4+4), 30,000 an hour",
      "Mark-62 from Manugraph: 3 units, 5 colour, 25,000 an hour, barcode and QR capable",
      "RO-62 Web Offset: 1 unit, 4 colour, 25,000 an hour",
    ],
  },
  {
    title: "Sheet-Fed Offset",
    items: [
      "Lithrone Model A37P: 4 colour, up to 640 × 940 mm",
      "Lithrone Model A37P with coater: 4 colour, up to 640 × 940 mm",
    ],
  },
  {
    title: "Computer Stationery Machines",
    items: [
      "FlexiBobine 12 web: 1 unit, 5 colour, 45,000 sheets an hour",
      "Muller-Martini Progress 520: 1 unit, 5 colour, UV ink dryer, 100 m/min",
      "Rollon Engineering (4 colour): 1 unit, 36,000 an hour",
      "Rollon Engineering (3 colour): 1 unit, 36,000 an hour",
      "Geekay Machinery (multi-colour): 3 units, 8,000 an hour",
    ],
  },
  {
    title: "Cutting & Security Finishing",
    items: [
      "Cutting machines: 10 units in total (Japan, UK, Germany, India)",
      "Pinning machines: 16 units (Stander Print Equipments)",
      "Box strapping: 10 machines (ITW Signode)",
      "Hologram stamping machine: 1 unit (inline, MICR numbering)",
      "Variable data printing: Konica Minolta 7120 & 6120",
      "Automatic film wrapping machine: 1 unit",
    ],
  },
  {
    title: "Plate Making & Pre-Press",
    items: [
      "Basys Print CTCP machine (Model 860): 1 unit, fully automatic, 80 plates an hour, 3,000 dpi",
      "Basys Print CTCP machine (Model 850): 1 unit, 40 plates an hour, 1,500 dpi",
      "DTP systems: 30 units, high specification",
      "Scanners: 10 units",
      "Laser printers: 10 A4 units + 10 A3 units",
    ],
  },
  {
    title: "Binding & Finishing",
    items: [
      "Perfect binding machines: 6 units (single-clamp, six-clamp, five-clamp, and four-clamp — from Print Tools, Well Bond, Muller-Martini, and Appu 1500)",
      "Stitching machines: 20 units",
      "Gathering machine: 1 unit (Hans Muller, Switzerland) — inline gathering, pinning, and cutting",
    ],
  },
  {
    title: "Support Infrastructure",
    items: [
      "Generator: 160 kVA generator sets (2 units)",
      "Plate exposure: 4 units (Oshio Graphics, India)",
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
