// Shared by /services and the homepage service cards.
// Each service icon borrows an image from one of its case studies.
export const services = [
  {
    id: "forecasting",
    title: "Environmental forecasting & early warning",
    body: "Site-calibrated forecasts based on (global weather) models and local data.",
    image: "/case-studies/frost/hero_band.svg",
  },
  {
    id: "modeling",
    title: "Groundwater & reactive transport modeling",
    body: "Numerical models of groundwater flow, transport and geochemical reactions. Based on open-source tools (MODFLOW, Julia, Python). Reproducible result.",
    image: "/case-studies/zero-order-denitrification/thumb.png",
  },
  {
    id: "instrumentation",
    title: "Field instrumentation & monitoring",
    body: "Sensor selection, installation and telemetry for water and weather monitoring. Because a model is useless without data.",
    image: "/case-studies/field-instrumentation/early-prototype.jpg",
  },
  {
    id: "hydrogeology",
    title: "Hydrogeological field work",
    body: "Interpreting and collecting data to support groundwater management decisions",
    image: "/case-studies/guatemala-mangroves/mangrove-aerial.jpg",
  },
  {
    id: "water-resources",
    title: "Water Resources Management",
    body: "Water balance and analysis to better manage water resources",
    image: "/case-studies/portugal-water-balance/water-balance-model.png",
  },
];
