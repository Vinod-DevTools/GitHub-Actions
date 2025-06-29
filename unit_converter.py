#!/usr/bin/env python3
"""
Fixed‑value Unit Converter
---------------------------------
Converts 1500 metres to:
  • kilometres
  • centimetres
  • millimetres

Feel free to extend the `units` dictionary with more targets
(e.g. "in": 39.3701, "ft": 3.28084, …).
"""

# --- settings -------------------------------------------------------------
value_m = 1500         # our fixed input in metres

# Keys = target unit, values = factor to multiply *metres* by
units = {
    "km": 1 / 1000,    # 1 m  = 0.001 km
    "cm": 100,         # 1 m  = 100   cm
    "mm": 1000,        # 1 m  = 1000  mm
}

# --- conversion & output --------------------------------------------------
print(f"Converting {value_m} metres:\n")

for unit, factor in units.items():
    converted = value_m * factor
    # Show the arithmetic so the user sees the “detail”
    print(f"{value_m} m × {factor:<8g} = {converted:g} {unit}")

