# Hospital images

Drop real hospital photography into these folders and point
`src/config/images.ts` at the local paths (e.g. `/images/hospital/exterior.jpg`).

```
public/images/
  hospital/      # exterior, corridors, reception, wards
  doctors/       # physician portraits
  departments/   # department / specialty imagery
  facilities/    # OT, ICU, pharmacy, ambulance
```

Until then, the site uses tasteful remote medical photography configured in
`src/config/images.ts`. Prefer landscape, high-resolution images and always set
a meaningful `alt` value.
