import config from '@payload-config'
import { getPayload } from 'payload'

const categories = [

  {
    "name": "All",
    "slug": "All",
  },
  {
    "name": "Air conditioning-heating system/radiators",
    "slug": "air-conditioning-heating-systemradiators",
    "color": "#000",
    "subcategories": [
      {
        "name": "Air conditioning (A/C)",
        "slug": "air-conditioning-ac",
        "subcategories": [
          {
            "name": "A/C air flow flap actuator/motor",
            "slug": "ac-air-flow-flap-actuatormotor"
          },
          {
            "name": "A/C compressor mount bracket",
            "slug": "ac-compressor-mount-bracket"
          },
          {
            "name": "A/C cooling radiator (condenser)",
            "slug": "ac-cooling-radiator-condenser"
          },
          {
            "name": "A/C flexible coupling/sleeve",
            "slug": "ac-flexible-couplingsleeve"
          },
          {
            "name": "Air conditioning (A/C) air dryer",
            "slug": "air-conditioning-ac-air-dryer"
          },
          {
            "name": "Air conditioning (A/C) compressor (pump)",
            "slug": "air-conditioning-ac-compressor-pump"
          },
          {
            "name": "Air conditioning (A/C) expansion valve",
            "slug": "air-conditioning-ac-expansion-valve"
          },
          {
            "name": "Air conditioning (A/C) pipe/hose",
            "slug": "air-conditioning-ac-pipehose"
          },
          {
            "name": "Air conditioning (A/C) pressure sensor",
            "slug": "air-conditioning-ac-pressure-sensor"
          },
          {
            "name": "Air conditioning (A/C) radiator (interior)",
            "slug": "air-conditioning-ac-radiator-interior"
          },
          {
            "name": "Air conditioning (A/C) system set",
            "slug": "air-conditioning-ac-system-set"
          },
          {
            "name": "Air conditioning compressor pulley",
            "slug": "air-conditioning-compressor-pulley"
          },
          {
            "name": "Other air conditioning (A/C) parts",
            "slug": "other-air-conditioning-ac-parts"
          }
        ]
      },
      {
        "name": "Cabin air supply/heating",
        "slug": "cabin-air-supplyheating",
        "subcategories": [
          {
            "name": "Air flap cable",
            "slug": "air-flap-cable"
          },
          {
            "name": "Air flap motor/actuator",
            "slug": "air-flap-motoractuator"
          },
          {
            "name": "Air micro filter air duct channel part",
            "slug": "air-micro-filter-air-duct-channel-part"
          },
          {
            "name": "Cabin air duct channel",
            "slug": "cabin-air-duct-channel"
          },
          {
            "name": "Cabin air micro filter",
            "slug": "cabin-air-micro-filter"
          },
          {
            "name": "Cabin air micro filter cap",
            "slug": "cabin-air-micro-filter-cap"
          },
          {
            "name": "Cabin air micro filter frame (part)",
            "slug": "cabin-air-micro-filter-frame-part"
          },
          {
            "name": "Cabin air micro filter set",
            "slug": "cabin-air-micro-filter-set"
          },
          {
            "name": "Electric cabin heater radiator",
            "slug": "electric-cabin-heater-radiator"
          },
          {
            "name": "Electric car heater",
            "slug": "electric-car-heater"
          },
          {
            "name": "Heater blower motor/fan resistor",
            "slug": "heater-blower-motorfan-resistor"
          },
          {
            "name": "Heater blower radiator",
            "slug": "heater-blower-radiator"
          },
          {
            "name": "Heater control cables",
            "slug": "heater-control-cables"
          },
          {
            "name": "Heater fan/blower",
            "slug": "heater-fanblower"
          },
          {
            "name": "Heater radiator pipe/hose",
            "slug": "heater-radiator-pipehose"
          },
          {
            "name": "Interior heater climate box assembly",
            "slug": "interior-heater-climate-box-assembly"
          },
          {
            "name": "Interior heater climate box assembly housing",
            "slug": "interior-heater-climate-box-assembly-housing"
          }
        ]
      },
      {
        "name": "Engine cooling/heating",
        "slug": "engine-coolingheating",
        "subcategories": [
          {
            "name": "Auxiliary pre-heater (Webasto)",
            "slug": "auxiliary-pre-heater-webasto"
          },
          {
            "name": "Coolant heater",
            "slug": "coolant-heater"
          },
          {
            "name": "Coolant heater control valve",
            "slug": "coolant-heater-control-valve"
          },
          {
            "name": "Electric auxiliary coolant/water pump",
            "slug": "electric-auxiliary-coolantwater-pump"
          },
          {
            "name": "Electric car engine cooling hoses/pipes",
            "slug": "electric-car-engine-cooling-hosespipes"
          },
          {
            "name": "Electric engine pre-heating system (optional)",
            "slug": "electric-engine-pre-heating-system-optional"
          },
          {
            "name": "Engine coolant pipe/hose",
            "slug": "engine-coolant-pipehose"
          },
          {
            "name": "Thermostat",
            "slug": "thermostat"
          },
          {
            "name": "Thermostat housing",
            "slug": "thermostat-housing"
          },
          {
            "name": "Thermostat/thermostat housing",
            "slug": "thermostatthermostat-housing"
          },
          {
            "name": "Water pump",
            "slug": "water-pump"
          },
          {
            "name": "Water pump pulley",
            "slug": "water-pump-pulley"
          },
          {
            "name": "Webasto auxiliary heater mount bracket",
            "slug": "webasto-auxiliary-heater-mount-bracket"
          },
          {
            "name": "Webasto auxiliary heater other parts",
            "slug": "webasto-auxiliary-heater-other-parts"
          },
          {
            "name": "Webasto auxiliary heater silencer",
            "slug": "webasto-auxiliary-heater-silencer"
          },
          {
            "name": "Webasto circulation pump for autonomous heater",
            "slug": "webasto-circulation-pump-for-autonomous-heater"
          }
        ]
      },
      {
        "name": "Radiators/fans",
        "slug": "radiatorsfans",
        "subcategories": [
          {
            "name": "Air conditioning (A/C) fan (condenser)",
            "slug": "air-conditioning-ac-fan-condenser"
          },
          {
            "name": "Coolant expansion tank/reservoir",
            "slug": "coolant-expansion-tankreservoir"
          },
          {
            "name": "Coolant expansion tank/reservoir cap",
            "slug": "coolant-expansion-tankreservoir-cap"
          },
          {
            "name": "Coolant level sensor",
            "slug": "coolant-level-sensor"
          },
          {
            "name": "Coolant radiator",
            "slug": "coolant-radiator"
          },
          {
            "name": "Coolant temperature sensor",
            "slug": "coolant-temperature-sensor"
          },
          {
            "name": "Electric car engine cooler",
            "slug": "electric-car-engine-cooler"
          },
          {
            "name": "Electric radiator cooling fan",
            "slug": "electric-radiator-cooling-fan"
          },
          {
            "name": "Engine oil radiator",
            "slug": "engine-oil-radiator"
          },
          {
            "name": "Fan impeller",
            "slug": "fan-impeller"
          },
          {
            "name": "Fan set",
            "slug": "fan-set"
          },
          {
            "name": "Fuel cooler (radiator)",
            "slug": "fuel-cooler-radiator"
          },
          {
            "name": "Gearbox / Transmission oil cooler",
            "slug": "gearbox-transmission-oil-cooler"
          },
          {
            "name": "Gearbox oil cooler pipe/hose",
            "slug": "gearbox-oil-cooler-pipehose"
          },
          {
            "name": "Hybrid/electric vehicle battery cooling hoses/tubes",
            "slug": "hybridelectric-vehicle-battery-cooling-hosestubes"
          },
          {
            "name": "Intercooler air channel guide",
            "slug": "intercooler-air-channel-guide"
          },
          {
            "name": "Intercooler radiator",
            "slug": "intercooler-radiator"
          },
          {
            "name": "Optional radiator",
            "slug": "optional-radiator"
          },
          {
            "name": "Power steering radiator",
            "slug": "power-steering-radiator"
          },
          {
            "name": "Radiator cooling fan shroud",
            "slug": "radiator-cooling-fan-shroud"
          },
          {
            "name": "Radiator mount bracket",
            "slug": "radiator-mount-bracket"
          },
          {
            "name": "Radiator set",
            "slug": "radiator-set"
          },
          {
            "name": "Transmission/gearbox oil cooler",
            "slug": "transmissiongearbox-oil-cooler"
          },
          {
            "name": "Viscous fan",
            "slug": "viscous-fan"
          },
          {
            "name": "Viscous fan clutch",
            "slug": "viscous-fan-clutch"
          }
        ]
      }
    ]
  },
  {
    "name": "Body/body parts/hook",
    "slug": "bodybody-partshook",
    "color": "#000",
    "subcategories": [
      {
        "name": "Accessories",
        "slug": "accessories",
        "subcategories": [
          {
            "name": "All-terrain vehicle front guard",
            "slug": "all-terrain-vehicle-front-guard"
          },
          {
            "name": "All-terrain vehicle rear guard (for jeeps)",
            "slug": "all-terrain-vehicle-rear-guard-for-jeeps"
          },
          {
            "name": "Bicycle carrier rack",
            "slug": "bicycle-carrier-rack"
          },
          {
            "name": "Bumper protection for All-terrain vehicles (jeeps)",
            "slug": "bumper-protection-for-all-terrain-vehicles-jeeps"
          },
          {
            "name": "Emergency warning sign",
            "slug": "emergency-warning-sign"
          },
          {
            "name": "Extinguisher",
            "slug": "extinguisher"
          },
          {
            "name": "First aid kit",
            "slug": "first-aid-kit"
          },
          {
            "name": "Front trunk storage compartment",
            "slug": "front-trunk-storage-compartment"
          },
          {
            "name": "Front trunk storage compartment trim",
            "slug": "front-trunk-storage-compartment-trim"
          },
          {
            "name": "Lift Jack",
            "slug": "lift-jack"
          },
          {
            "name": "Owners service history hand book",
            "slug": "owners-service-history-hand-book"
          },
          {
            "name": "Roof trunk box",
            "slug": "roof-trunk-box"
          },
          {
            "name": "Thresholds for All-terrain vehicles",
            "slug": "thresholds-for-all-terrain-vehicles"
          },
          {
            "name": "Tire air pump compressor",
            "slug": "tire-air-pump-compressor"
          },
          {
            "name": "Tool box",
            "slug": "tool-box"
          },
          {
            "name": "Tool set",
            "slug": "tool-set"
          },
          {
            "name": "Towing hook eye",
            "slug": "towing-hook-eye"
          },
          {
            "name": "User manual",
            "slug": "user-manual"
          },
          {
            "name": "Wheel nut wrench",
            "slug": "wheel-nut-wrench"
          }
        ]
      },
      {
        "name": "Body/body for parts",
        "slug": "bodybody-for-parts",
        "subcategories": [
          {
            "name": "Body",
            "slug": "body"
          },
          {
            "name": "Frame",
            "slug": "frame"
          },
          {
            "name": "Front arch",
            "slug": "front-arch"
          },
          {
            "name": "Front bodywork piece",
            "slug": "front-bodywork-piece"
          },
          {
            "name": "Front quarter panel",
            "slug": "front-quarter-panel"
          },
          {
            "name": "Front side member",
            "slug": "front-side-member"
          },
          {
            "name": "Front sill (body part)",
            "slug": "front-sill-body-part"
          },
          {
            "name": "Other body part",
            "slug": "other-body-part"
          },
          {
            "name": "Partition between cabin",
            "slug": "partition-between-cabin"
          },
          {
            "name": "Pillar (middle)",
            "slug": "pillar-middle"
          },
          {
            "name": "Rear arch",
            "slug": "rear-arch"
          },
          {
            "name": "Rear bodywork",
            "slug": "rear-bodywork"
          },
          {
            "name": "Rear quarter panel",
            "slug": "rear-quarter-panel"
          },
          {
            "name": "Rear sill (body part)",
            "slug": "rear-sill-body-part"
          },
          {
            "name": "Roof",
            "slug": "roof"
          },
          {
            "name": "Side car body part",
            "slug": "side-car-body-part"
          },
          {
            "name": "Sound insulation of firewall",
            "slug": "sound-insulation-of-firewall"
          },
          {
            "name": "Trunk bottom trim panel",
            "slug": "trunk-bottom-trim-panel"
          }
        ]
      },
      {
        "name": "Convertible/folding roof",
        "slug": "convertiblefolding-roof",
        "subcategories": [
          {
            "name": "Convertible roof hinge",
            "slug": "convertible-roof-hinge"
          },
          {
            "name": "Convertible roof hydraulic pump",
            "slug": "convertible-roof-hydraulic-pump"
          },
          {
            "name": "Convertible roof line/pipe/hose",
            "slug": "convertible-roof-linepipehose"
          },
          {
            "name": "Convertible roof lock latch cylinder",
            "slug": "convertible-roof-lock-latch-cylinder"
          },
          {
            "name": "Convertible roof lock/latch",
            "slug": "convertible-roof-locklatch"
          },
          {
            "name": "Convertible roof main ram cylinder",
            "slug": "convertible-roof-main-ram-cylinder"
          },
          {
            "name": "Convertible roof pump sound insulation",
            "slug": "convertible-roof-pump-sound-insulation"
          },
          {
            "name": "Convertible roof roll over bar",
            "slug": "convertible-roof-roll-over-bar"
          },
          {
            "name": "Convertible roof set",
            "slug": "convertible-roof-set"
          },
          {
            "name": "Convertible roof soft/hard top",
            "slug": "convertible-roof-softhard-top"
          },
          {
            "name": "Convertible wind deflector",
            "slug": "convertible-wind-deflector"
          },
          {
            "name": "Folding roof motor",
            "slug": "folding-roof-motor"
          },
          {
            "name": "Folding roof switch",
            "slug": "folding-roof-switch"
          }
        ]
      },
      {
        "name": "Other exterior body parts",
        "slug": "other-exterior-body-parts",
        "subcategories": [
          {
            "name": "Aerial GPS antenna",
            "slug": "aerial-gps-antenna"
          },
          {
            "name": "Complete body kit",
            "slug": "complete-body-kit"
          },
          {
            "name": "Distronic sensor bracket",
            "slug": "distronic-sensor-bracket"
          },
          {
            "name": "Electric tow winch",
            "slug": "electric-tow-winch"
          },
          {
            "name": "Fuel tank cap trim",
            "slug": "fuel-tank-cap-trim"
          },
          {
            "name": "Glass fitting brackets",
            "slug": "glass-fitting-brackets"
          },
          {
            "name": "Jacking socket point",
            "slug": "jacking-socket-point"
          },
          {
            "name": "Ladder",
            "slug": "ladder"
          },
          {
            "name": "Other badges/marks",
            "slug": "other-badgesmarks"
          },
          {
            "name": "Radio antenna",
            "slug": "radio-antenna"
          },
          {
            "name": "Rear glass trim",
            "slug": "rear-glass-trim"
          },
          {
            "name": "Roof (GPS) antenna cover",
            "slug": "roof-gps-antenna-cover"
          },
          {
            "name": "Roof bar rail",
            "slug": "roof-bar-rail"
          },
          {
            "name": "Roof bar rail cover",
            "slug": "roof-bar-rail-cover"
          },
          {
            "name": "Roof transverse bars on the \"horns\"",
            "slug": "roof-transverse-bars-on-the-horns"
          },
          {
            "name": "Roof trim bar molding cover",
            "slug": "roof-trim-bar-molding-cover"
          },
          {
            "name": "Van refrigerator",
            "slug": "van-refrigerator"
          },
          {
            "name": "Windshield trim",
            "slug": "windshield-trim"
          }
        ]
      },
      {
        "name": "Pickup box",
        "slug": "pickup-box",
        "subcategories": [
          {
            "name": "Pick-up truck tonneau cover",
            "slug": "pick-up-truck-tonneau-cover"
          },
          {
            "name": "Pickup box",
            "slug": "pickup-box"
          },
          {
            "name": "Pickup box liner",
            "slug": "pickup-box-liner"
          },
          {
            "name": "Pickup box rear panel tailgate",
            "slug": "pickup-box-rear-panel-tailgate"
          },
          {
            "name": "Pickup box side panel side gate",
            "slug": "pickup-box-side-panel-side-gate"
          },
          {
            "name": "Pickup box tonneau cover",
            "slug": "pickup-box-tonneau-cover"
          }
        ]
      },
      {
        "name": "Side skirt/arches trim",
        "slug": "side-skirtarches-trim",
        "subcategories": [
          {
            "name": "Front mudguard",
            "slug": "front-mudguard"
          },
          {
            "name": "Front sill trim cover",
            "slug": "front-sill-trim-cover"
          },
          {
            "name": "Mudguards set",
            "slug": "mudguards-set"
          },
          {
            "name": "Rear arch trim",
            "slug": "rear-arch-trim"
          },
          {
            "name": "Rear fender molding trim",
            "slug": "rear-fender-molding-trim"
          },
          {
            "name": "Rear mudguard",
            "slug": "rear-mudguard"
          },
          {
            "name": "side skirts sill cover",
            "slug": "side-skirts-sill-cover"
          },
          {
            "name": "Sill",
            "slug": "sill"
          },
          {
            "name": "Sill supporting ledge",
            "slug": "sill-supporting-ledge"
          },
          {
            "name": "Sill/side skirt trim",
            "slug": "sillside-skirt-trim"
          }
        ]
      },
      {
        "name": "Sunroof",
        "slug": "sunroof",
        "subcategories": [
          {
            "name": "Air flow deflector",
            "slug": "air-flow-deflector"
          },
          {
            "name": "Electric sunroof installation",
            "slug": "electric-sunroof-installation"
          },
          {
            "name": "Rain gutter",
            "slug": "rain-gutter"
          },
          {
            "name": "Sunroof frame",
            "slug": "sunroof-frame"
          },
          {
            "name": "Sunroof glass",
            "slug": "sunroof-glass"
          },
          {
            "name": "Sunroof motor/actuator",
            "slug": "sunroof-motoractuator"
          },
          {
            "name": "Sunroof sealing rubber",
            "slug": "sunroof-sealing-rubber"
          },
          {
            "name": "Sunroof set",
            "slug": "sunroof-set"
          },
          {
            "name": "Water drain line hose",
            "slug": "water-drain-line-hose"
          }
        ]
      },
      {
        "name": "Tow ball",
        "slug": "tow-ball",
        "subcategories": [
          {
            "name": "Detachable towbar",
            "slug": "detachable-towbar"
          },
          {
            "name": "Switch for retractable tow bar",
            "slug": "switch-for-retractable-tow-bar"
          },
          {
            "name": "Tow ball cover/cap",
            "slug": "tow-ball-covercap"
          },
          {
            "name": "Tow bar",
            "slug": "tow-bar"
          },
          {
            "name": "Tow bar electric loom",
            "slug": "tow-bar-electric-loom"
          },
          {
            "name": "Tow bar electric socket",
            "slug": "tow-bar-electric-socket"
          },
          {
            "name": "Tow bar mounting accessories",
            "slug": "tow-bar-mounting-accessories"
          },
          {
            "name": "Tow bar set",
            "slug": "tow-bar-set"
          }
        ]
      }
    ]
  },
  {
    "name": "Brake system",
    "slug": "brake-system",
    "color": "#000",
    "subcategories": [
      {
        "name": "ABS block",
        "slug": "abs-block",
        "subcategories": [
          {
            "name": "ABS Pump",
            "slug": "abs-pump"
          },
          {
            "name": "ABS pump bracket",
            "slug": "abs-pump-bracket"
          },
          {
            "name": "ABS wheel speed sensor",
            "slug": "abs-wheel-speed-sensor"
          },
          {
            "name": "Brake vacuum hose/pipe",
            "slug": "brake-vacuum-hosepipe"
          }
        ]
      },
      {
        "name": "Brake booster/master cylinder",
        "slug": "brake-boostermaster-cylinder",
        "subcategories": [
          {
            "name": "Brake booster",
            "slug": "brake-booster"
          },
          {
            "name": "Brake booster pipe/hose",
            "slug": "brake-booster-pipehose"
          },
          {
            "name": "Brake fluid reservoir",
            "slug": "brake-fluid-reservoir"
          },
          {
            "name": "Brake fluid reservoir filler cap with level sensor",
            "slug": "brake-fluid-reservoir-filler-cap-with-level-sensor"
          },
          {
            "name": "Master brake cylinder",
            "slug": "master-brake-cylinder"
          }
        ]
      },
      {
        "name": "Brake system parts",
        "slug": "brake-system-parts",
        "subcategories": [
          {
            "name": "ABS brake wheel speed sensor",
            "slug": "abs-brake-wheel-speed-sensor"
          },
          {
            "name": "ABS rear brake sensor",
            "slug": "abs-rear-brake-sensor"
          },
          {
            "name": "Brake caliper pad carrier rear",
            "slug": "brake-caliper-pad-carrier-rear"
          },
          {
            "name": "Brake central valve",
            "slug": "brake-central-valve"
          },
          {
            "name": "Brake discs and calipers set",
            "slug": "brake-discs-and-calipers-set"
          },
          {
            "name": "Brake line pipe/hose",
            "slug": "brake-line-pipehose"
          },
          {
            "name": "Brake pads (front)",
            "slug": "brake-pads-front"
          },
          {
            "name": "Brake pads (rear)",
            "slug": "brake-pads-rear"
          },
          {
            "name": "Brake power pressure regulator",
            "slug": "brake-power-pressure-regulator"
          },
          {
            "name": "Brake wiring harness",
            "slug": "brake-wiring-harness"
          },
          {
            "name": "Drum brake (front)",
            "slug": "drum-brake-front"
          },
          {
            "name": "Drum brake (rear)",
            "slug": "drum-brake-rear"
          },
          {
            "name": "Front brake caliper",
            "slug": "front-brake-caliper"
          },
          {
            "name": "Front Brake Caliper Pad/Carrier",
            "slug": "front-brake-caliper-padcarrier"
          },
          {
            "name": "Front brake disc",
            "slug": "front-brake-disc"
          },
          {
            "name": "Front brake disc dust cover plate",
            "slug": "front-brake-disc-dust-cover-plate"
          },
          {
            "name": "Front brake pad spring",
            "slug": "front-brake-pad-spring"
          },
          {
            "name": "Other brake parts",
            "slug": "other-brake-parts"
          },
          {
            "name": "Rear brake caliper",
            "slug": "rear-brake-caliper"
          },
          {
            "name": "Rear brake cylinder",
            "slug": "rear-brake-cylinder"
          },
          {
            "name": "Rear brake disc",
            "slug": "rear-brake-disc"
          },
          {
            "name": "Rear brake disc plate dust cover",
            "slug": "rear-brake-disc-plate-dust-cover"
          },
          {
            "name": "Rear brake pad spring",
            "slug": "rear-brake-pad-spring"
          }
        ]
      },
      {
        "name": "Parking brake/handbrake system",
        "slug": "parking-brakehandbrake-system",
        "subcategories": [
          {
            "name": "Hand brake release cable",
            "slug": "hand-brake-release-cable"
          },
          {
            "name": "Hand brake release handle",
            "slug": "hand-brake-release-handle"
          },
          {
            "name": "Hand brake/parking brake motor",
            "slug": "hand-brakeparking-brake-motor"
          },
          {
            "name": "Handbrake interior bracket",
            "slug": "handbrake-interior-bracket"
          },
          {
            "name": "Handbrake lever cover (leather/fabric)",
            "slug": "handbrake-lever-cover-leatherfabric"
          },
          {
            "name": "Handbrake trim",
            "slug": "handbrake-trim"
          },
          {
            "name": "Handbrake wiring loom/harness",
            "slug": "handbrake-wiring-loomharness"
          },
          {
            "name": "Handbrake/parking brake lever assembly",
            "slug": "handbrakeparking-brake-lever-assembly"
          },
          {
            "name": "Handbrake/parking brake pads",
            "slug": "handbrakeparking-brake-pads"
          },
          {
            "name": "Handbrake/parking brake wiring cable",
            "slug": "handbrakeparking-brake-wiring-cable"
          },
          {
            "name": "Other handbrake/parking brake parts",
            "slug": "other-handbrakeparking-brake-parts"
          }
        ]
      }
    ]
  },
  {
    "name": "Cabin/interior",
    "slug": "cabininterior",
    "color": "#000",
    "subcategories": [
      {
        "name": "Airbags/belts",
        "slug": "airbagsbelts",
        "subcategories": [
          {
            "name": "Airbag cover",
            "slug": "airbag-cover"
          },
          {
            "name": "Airbag set",
            "slug": "airbag-set"
          },
          {
            "name": "Airbag set with panel",
            "slug": "airbag-set-with-panel"
          },
          {
            "name": "Front door airbag",
            "slug": "front-door-airbag"
          },
          {
            "name": "Front seatbelt",
            "slug": "front-seatbelt"
          },
          {
            "name": "Front seatbelt buckle",
            "slug": "front-seatbelt-buckle"
          },
          {
            "name": "Knee airbag",
            "slug": "knee-airbag"
          },
          {
            "name": "Middle seatbelt (rear)",
            "slug": "middle-seatbelt-rear"
          },
          {
            "name": "Middle seatbelt buckle (rear)",
            "slug": "middle-seatbelt-buckle-rear"
          },
          {
            "name": "Passenger airbag",
            "slug": "passenger-airbag"
          },
          {
            "name": "Pedestrian airbag",
            "slug": "pedestrian-airbag"
          },
          {
            "name": "Rear door airbag",
            "slug": "rear-door-airbag"
          },
          {
            "name": "Rear seatbelt",
            "slug": "rear-seatbelt"
          },
          {
            "name": "Rear seatbelt buckle",
            "slug": "rear-seatbelt-buckle"
          },
          {
            "name": "Roof airbag",
            "slug": "roof-airbag"
          },
          {
            "name": "Roof seat belt",
            "slug": "roof-seat-belt"
          },
          {
            "name": "Seat airbag",
            "slug": "seat-airbag"
          },
          {
            "name": "Seat belt adjustment motor",
            "slug": "seat-belt-adjustment-motor"
          },
          {
            "name": "Seat belt adjustment rail",
            "slug": "seat-belt-adjustment-rail"
          },
          {
            "name": "Seat belt height adjuster",
            "slug": "seat-belt-height-adjuster"
          },
          {
            "name": "Set of seat belts",
            "slug": "set-of-seat-belts"
          },
          {
            "name": "Side airbag",
            "slug": "side-airbag"
          },
          {
            "name": "Steering wheel airbag",
            "slug": "steering-wheel-airbag"
          },
          {
            "name": "Steering wheel airbag cover",
            "slug": "steering-wheel-airbag-cover"
          },
          {
            "name": "Third row seat belt",
            "slug": "third-row-seat-belt"
          }
        ]
      },
      {
        "name": "Cabin/seat/headlining/mat sets",
        "slug": "cabinseatheadliningmat-sets",
        "subcategories": [
          {
            "name": "Car floor mat set",
            "slug": "car-floor-mat-set"
          },
          {
            "name": "Door card panel trim set",
            "slug": "door-card-panel-trim-set"
          },
          {
            "name": "Headlining set",
            "slug": "headlining-set"
          },
          {
            "name": "Interior decorative trim set",
            "slug": "interior-decorative-trim-set"
          },
          {
            "name": "Interior set",
            "slug": "interior-set"
          },
          {
            "name": "Seat and door cards trim set",
            "slug": "seat-and-door-cards-trim-set"
          },
          {
            "name": "Seat set",
            "slug": "seat-set"
          }
        ]
      },
      {
        "name": "Carpets/mats",
        "slug": "carpetsmats",
        "subcategories": [
          {
            "name": "Floor mat clip fixing clamp",
            "slug": "floor-mat-clip-fixing-clamp"
          },
          {
            "name": "Foot rest pad/dead pedal",
            "slug": "foot-rest-paddead-pedal"
          },
          {
            "name": "Front floor carpet liner",
            "slug": "front-floor-carpet-liner"
          },
          {
            "name": "Front floor mat",
            "slug": "front-floor-mat"
          },
          {
            "name": "Interior carpet",
            "slug": "interior-carpet"
          },
          {
            "name": "Rear floor carpet liner",
            "slug": "rear-floor-carpet-liner"
          },
          {
            "name": "Rear floor mat",
            "slug": "rear-floor-mat"
          },
          {
            "name": "Rubber trunk/boot mat liner",
            "slug": "rubber-trunkboot-mat-liner"
          },
          {
            "name": "Second row seat mat",
            "slug": "second-row-seat-mat"
          },
          {
            "name": "Third row mat",
            "slug": "third-row-mat"
          },
          {
            "name": "Trunk/boot mat liner",
            "slug": "trunkboot-mat-liner"
          }
        ]
      },
      {
        "name": "Center console (tunnel)",
        "slug": "center-console-tunnel",
        "subcategories": [
          {
            "name": "Armrest",
            "slug": "armrest"
          },
          {
            "name": "Armrest lock",
            "slug": "armrest-lock"
          },
          {
            "name": "Ashtray (front)",
            "slug": "ashtray-front"
          },
          {
            "name": "Ashtray (rear)",
            "slug": "ashtray-rear"
          },
          {
            "name": "Ashtray trim (front)",
            "slug": "ashtray-trim-front"
          },
          {
            "name": "Ashtray trim (rear)",
            "slug": "ashtray-trim-rear"
          },
          {
            "name": "Center console",
            "slug": "center-console"
          },
          {
            "name": "Center console decorative trim",
            "slug": "center-console-decorative-trim"
          },
          {
            "name": "Central console drawer/shelf pad",
            "slug": "central-console-drawershelf-pad"
          },
          {
            "name": "Centre console side trim front",
            "slug": "centre-console-side-trim-front"
          },
          {
            "name": "Centre console side trim rear",
            "slug": "centre-console-side-trim-rear"
          },
          {
            "name": "Cigarette lighter front",
            "slug": "cigarette-lighter-front"
          },
          {
            "name": "Cigarette lighter rear",
            "slug": "cigarette-lighter-rear"
          },
          {
            "name": "Cigarette lighter trim front",
            "slug": "cigarette-lighter-trim-front"
          },
          {
            "name": "Cigarette lighter trim rear",
            "slug": "cigarette-lighter-trim-rear"
          },
          {
            "name": "Cup holder back",
            "slug": "cup-holder-back"
          },
          {
            "name": "Cup holder front",
            "slug": "cup-holder-front"
          },
          {
            "name": "Cup holder pad/mat",
            "slug": "cup-holder-padmat"
          },
          {
            "name": "Gear lever shifter trim leather/knob",
            "slug": "gear-lever-shifter-trim-leatherknob"
          },
          {
            "name": "Gear shifter surround trim plastic",
            "slug": "gear-shifter-surround-trim-plastic"
          },
          {
            "name": "Glove box central console",
            "slug": "glove-box-central-console"
          },
          {
            "name": "Glove box pad",
            "slug": "glove-box-pad"
          },
          {
            "name": "Other center console (tunnel) element",
            "slug": "other-center-console-tunnel-element"
          },
          {
            "name": "Rear air vent grill",
            "slug": "rear-air-vent-grill"
          },
          {
            "name": "Rear storage box compartment pad/mat",
            "slug": "rear-storage-box-compartment-padmat"
          },
          {
            "name": "Refrigerator",
            "slug": "refrigerator"
          }
        ]
      },
      {
        "name": "Front dash dashboard",
        "slug": "front-dash-dashboard",
        "subcategories": [
          {
            "name": "Car ashtray",
            "slug": "car-ashtray"
          },
          {
            "name": "Car ashtray trim",
            "slug": "car-ashtray-trim"
          },
          {
            "name": "Cigarette lighter",
            "slug": "cigarette-lighter"
          },
          {
            "name": "Cigarette lighter trim",
            "slug": "cigarette-lighter-trim"
          },
          {
            "name": "Climate control/heater control trim",
            "slug": "climate-controlheater-control-trim"
          },
          {
            "name": "Cup holder",
            "slug": "cup-holder"
          },
          {
            "name": "Dash center air vent grill",
            "slug": "dash-center-air-vent-grill"
          },
          {
            "name": "Dash center speaker frame",
            "slug": "dash-center-speaker-frame"
          },
          {
            "name": "Dash center speaker trim cover",
            "slug": "dash-center-speaker-trim-cover"
          },
          {
            "name": "Dashboard",
            "slug": "dashboard"
          },
          {
            "name": "Dashboard air vent grill cover trim",
            "slug": "dashboard-air-vent-grill-cover-trim"
          },
          {
            "name": "Dashboard center trim panel",
            "slug": "dashboard-center-trim-panel"
          },
          {
            "name": "Dashboard cross member/frame bar",
            "slug": "dashboard-cross-memberframe-bar"
          },
          {
            "name": "Dashboard glove box trim",
            "slug": "dashboard-glove-box-trim"
          },
          {
            "name": "Dashboard lower bottom trim panel",
            "slug": "dashboard-lower-bottom-trim-panel"
          },
          {
            "name": "Dashboard side air vent grill/cover trim",
            "slug": "dashboard-side-air-vent-grillcover-trim"
          },
          {
            "name": "Dashboard side end trim",
            "slug": "dashboard-side-end-trim"
          },
          {
            "name": "Dashboard storage box/compartment",
            "slug": "dashboard-storage-boxcompartment"
          },
          {
            "name": "Dashboard trim",
            "slug": "dashboard-trim"
          },
          {
            "name": "Glove box",
            "slug": "glove-box"
          },
          {
            "name": "Glove box frame",
            "slug": "glove-box-frame"
          },
          {
            "name": "Glove box handle",
            "slug": "glove-box-handle"
          },
          {
            "name": "Glove box lid/cover",
            "slug": "glove-box-lidcover"
          },
          {
            "name": "Glove box lock",
            "slug": "glove-box-lock"
          },
          {
            "name": "Glove box opening button",
            "slug": "glove-box-opening-button"
          },
          {
            "name": "Glove box set",
            "slug": "glove-box-set"
          },
          {
            "name": "Glovebox shock absorber",
            "slug": "glovebox-shock-absorber"
          },
          {
            "name": "Head up display trim",
            "slug": "head-up-display-trim"
          },
          {
            "name": "Other dashboard part",
            "slug": "other-dashboard-part"
          },
          {
            "name": "Panel drawer/shelf pad",
            "slug": "panel-drawershelf-pad"
          },
          {
            "name": "Panel trim",
            "slug": "panel-trim"
          },
          {
            "name": "Radio/GPS head unit trim",
            "slug": "radiogps-head-unit-trim"
          },
          {
            "name": "Side speaker frame",
            "slug": "side-speaker-frame"
          },
          {
            "name": "Side speaker trim/cover",
            "slug": "side-speaker-trimcover"
          }
        ]
      },
      {
        "name": "Front door card panel trim",
        "slug": "front-door-card-panel-trim",
        "subcategories": [
          {
            "name": "Front door card panel trim",
            "slug": "front-door-card-panel-trim"
          },
          {
            "name": "Front door interior handle",
            "slug": "front-door-interior-handle"
          },
          {
            "name": "Front door interior handle trim",
            "slug": "front-door-interior-handle-trim"
          },
          {
            "name": "Front door seat control surround trim",
            "slug": "front-door-seat-control-surround-trim"
          },
          {
            "name": "Front door speaker cover trim",
            "slug": "front-door-speaker-cover-trim"
          },
          {
            "name": "Front door storage pocket/box",
            "slug": "front-door-storage-pocketbox"
          },
          {
            "name": "Front door trim bar",
            "slug": "front-door-trim-bar"
          },
          {
            "name": "Front door window switch trim",
            "slug": "front-door-window-switch-trim"
          },
          {
            "name": "Front door window winding handle",
            "slug": "front-door-window-winding-handle"
          },
          {
            "name": "Mirror switch trim",
            "slug": "mirror-switch-trim"
          },
          {
            "name": "Other front door trim element",
            "slug": "other-front-door-trim-element"
          }
        ]
      },
      {
        "name": "Headlining/sunroof",
        "slug": "headliningsunroof",
        "subcategories": [
          {
            "name": "A set of handles for the ceiling",
            "slug": "a-set-of-handles-for-the-ceiling"
          },
          {
            "name": "Air vent grill in roof",
            "slug": "air-vent-grill-in-roof"
          },
          {
            "name": "Cargo luggage net fixing mount",
            "slug": "cargo-luggage-net-fixing-mount"
          },
          {
            "name": "Front interior roof grab handle",
            "slug": "front-interior-roof-grab-handle"
          },
          {
            "name": "Hands free microphone trim cover",
            "slug": "hands-free-microphone-trim-cover"
          },
          {
            "name": "Headlining",
            "slug": "headlining"
          },
          {
            "name": "Headlining lighting console trim",
            "slug": "headlining-lighting-console-trim"
          },
          {
            "name": "Headlining roof cover",
            "slug": "headlining-roof-cover"
          },
          {
            "name": "Headlining roof glove box",
            "slug": "headlining-roof-glove-box"
          },
          {
            "name": "Hook",
            "slug": "hook"
          },
          {
            "name": "Rear interior roof grab handle",
            "slug": "rear-interior-roof-grab-handle"
          },
          {
            "name": "Rear view mirror (interior)",
            "slug": "rear-view-mirror-interior"
          },
          {
            "name": "Rearview mirror trim",
            "slug": "rearview-mirror-trim"
          },
          {
            "name": "Sun visor",
            "slug": "sun-visor"
          },
          {
            "name": "Sun visor clip/hook/bracket",
            "slug": "sun-visor-cliphookbracket"
          },
          {
            "name": "Sunglasses storage box",
            "slug": "sunglasses-storage-box"
          }
        ]
      },
      {
        "name": "Parcel shelf",
        "slug": "parcel-shelf",
        "subcategories": [
          {
            "name": "Cover in windowsill",
            "slug": "cover-in-windowsill"
          },
          {
            "name": "Electric rear window sunshade cover",
            "slug": "electric-rear-window-sunshade-cover"
          },
          {
            "name": "Frame",
            "slug": "frame"
          },
          {
            "name": "Manual rear window sunshade cover",
            "slug": "manual-rear-window-sunshade-cover"
          },
          {
            "name": "Other parcel shelf part",
            "slug": "other-parcel-shelf-part"
          },
          {
            "name": "Parcel shelf",
            "slug": "parcel-shelf"
          },
          {
            "name": "Parcel shelf grill",
            "slug": "parcel-shelf-grill"
          },
          {
            "name": "Parcel shelf speaker trim grill",
            "slug": "parcel-shelf-speaker-trim-grill"
          },
          {
            "name": "Seat belt trim",
            "slug": "seat-belt-trim"
          }
        ]
      },
      {
        "name": "Pedals",
        "slug": "pedals",
        "subcategories": [
          {
            "name": "Accelerator pedal position sensor",
            "slug": "accelerator-pedal-position-sensor"
          },
          {
            "name": "Accelerator throttle pedal",
            "slug": "accelerator-throttle-pedal"
          },
          {
            "name": "Accelerator throttle pedal bracket",
            "slug": "accelerator-throttle-pedal-bracket"
          },
          {
            "name": "Brake pedal",
            "slug": "brake-pedal"
          },
          {
            "name": "Brake pedal bracket assembly",
            "slug": "brake-pedal-bracket-assembly"
          },
          {
            "name": "Clutch pedal",
            "slug": "clutch-pedal"
          },
          {
            "name": "Clutch pedal mounting bracket assembly",
            "slug": "clutch-pedal-mounting-bracket-assembly"
          },
          {
            "name": "Pedal assembly",
            "slug": "pedal-assembly"
          },
          {
            "name": "Throttle cable",
            "slug": "throttle-cable"
          }
        ]
      },
      {
        "name": "Rear door card panel trim",
        "slug": "rear-door-card-panel-trim",
        "subcategories": [
          {
            "name": "Coupe rear side trim panel",
            "slug": "coupe-rear-side-trim-panel"
          },
          {
            "name": "Other rear door trim element",
            "slug": "other-rear-door-trim-element"
          },
          {
            "name": "Rear door ashtray",
            "slug": "rear-door-ashtray"
          },
          {
            "name": "Rear door card panel trim",
            "slug": "rear-door-card-panel-trim"
          },
          {
            "name": "Rear door card trim",
            "slug": "rear-door-card-trim"
          },
          {
            "name": "Rear door handle trim",
            "slug": "rear-door-handle-trim"
          },
          {
            "name": "Rear door interior handle trim",
            "slug": "rear-door-interior-handle-trim"
          },
          {
            "name": "Rear door speaker cover trim",
            "slug": "rear-door-speaker-cover-trim"
          },
          {
            "name": "Rear door storage/pocket box",
            "slug": "rear-door-storagepocket-box"
          },
          {
            "name": "Rear door window curtain/sunshade",
            "slug": "rear-door-window-curtainsunshade"
          },
          {
            "name": "Rear door window switch trim",
            "slug": "rear-door-window-switch-trim"
          },
          {
            "name": "Rear door window winding handle",
            "slug": "rear-door-window-winding-handle"
          }
        ]
      },
      {
        "name": "Seats",
        "slug": "seats",
        "subcategories": [
          {
            "name": "Driver seat console base",
            "slug": "driver-seat-console-base"
          },
          {
            "name": "Folding tray",
            "slug": "folding-tray"
          },
          {
            "name": "Front double seat",
            "slug": "front-double-seat"
          },
          {
            "name": "Front driver seat",
            "slug": "front-driver-seat"
          },
          {
            "name": "Front driver seat rail",
            "slug": "front-driver-seat-rail"
          },
          {
            "name": "Front driver seat rail trim",
            "slug": "front-driver-seat-rail-trim"
          },
          {
            "name": "Front passenger seat",
            "slug": "front-passenger-seat"
          },
          {
            "name": "Front passenger seat console base",
            "slug": "front-passenger-seat-console-base"
          },
          {
            "name": "Front passenger seat rail",
            "slug": "front-passenger-seat-rail"
          },
          {
            "name": "Front passenger seat rail trim",
            "slug": "front-passenger-seat-rail-trim"
          },
          {
            "name": "Front seat headrest",
            "slug": "front-seat-headrest"
          },
          {
            "name": "ISOFIX Bracket",
            "slug": "isofix-bracket"
          },
          {
            "name": "ISOFIX cover",
            "slug": "isofix-cover"
          },
          {
            "name": "Other seats",
            "slug": "other-seats"
          },
          {
            "name": "Rear seat",
            "slug": "rear-seat"
          },
          {
            "name": "Rear seat armrest",
            "slug": "rear-seat-armrest"
          },
          {
            "name": "Rear seat cable / handle",
            "slug": "rear-seat-cable-handle"
          },
          {
            "name": "Rear seat guide rail",
            "slug": "rear-seat-guide-rail"
          },
          {
            "name": "Rear seat headrest",
            "slug": "rear-seat-headrest"
          },
          {
            "name": "Rear seat rail trim cover",
            "slug": "rear-seat-rail-trim-cover"
          },
          {
            "name": "Seat adjustment assembly",
            "slug": "seat-adjustment-assembly"
          },
          {
            "name": "Seat adjustment handle",
            "slug": "seat-adjustment-handle"
          },
          {
            "name": "Seat adjustment knob",
            "slug": "seat-adjustment-knob"
          },
          {
            "name": "Seat adjustment motor",
            "slug": "seat-adjustment-motor"
          },
          {
            "name": "Seat back rest lock catch",
            "slug": "seat-back-rest-lock-catch"
          },
          {
            "name": "Seat fan/blower",
            "slug": "seat-fanblower"
          },
          {
            "name": "Seat frame",
            "slug": "seat-frame"
          },
          {
            "name": "Seat heating element",
            "slug": "seat-heating-element"
          },
          {
            "name": "Seat trim",
            "slug": "seat-trim"
          },
          {
            "name": "Second row seats",
            "slug": "second-row-seats"
          },
          {
            "name": "Third row seat headrest",
            "slug": "third-row-seat-headrest"
          },
          {
            "name": "Third row seats",
            "slug": "third-row-seats"
          }
        ]
      },
      {
        "name": "Sill/pillar trim",
        "slug": "sillpillar-trim",
        "subcategories": [
          {
            "name": "(A) pillar trim",
            "slug": "a-pillar-trim"
          },
          {
            "name": "(B) pillar trim (bottom)",
            "slug": "b-pillar-trim-bottom"
          },
          {
            "name": "(B) Pillar trim (exterior)",
            "slug": "b-pillar-trim-exterior"
          },
          {
            "name": "(B) pillar trim (top)",
            "slug": "b-pillar-trim-top"
          },
          {
            "name": "(C) pillar trim",
            "slug": "c-pillar-trim"
          },
          {
            "name": "(D)pillar trim (top)",
            "slug": "dpillar-trim-top"
          },
          {
            "name": "Engine bonnet (hood) release handle",
            "slug": "engine-bonnet-hood-release-handle"
          },
          {
            "name": "Foot area side trim",
            "slug": "foot-area-side-trim"
          },
          {
            "name": "Front sill trim cover",
            "slug": "front-sill-trim-cover"
          },
          {
            "name": "Other sill/pillar trim element",
            "slug": "other-sillpillar-trim-element"
          },
          {
            "name": "Rear seat side bottom trim",
            "slug": "rear-seat-side-bottom-trim"
          },
          {
            "name": "Rear seat side top trim",
            "slug": "rear-seat-side-top-trim"
          },
          {
            "name": "Rear sill trim cover",
            "slug": "rear-sill-trim-cover"
          },
          {
            "name": "Side skirt front trim",
            "slug": "side-skirt-front-trim"
          },
          {
            "name": "Side skirt rear trim",
            "slug": "side-skirt-rear-trim"
          },
          {
            "name": "sill trim set (inner)",
            "slug": "sill-trim-set-inner"
          }
        ]
      },
      {
        "name": "Sliding door card",
        "slug": "sliding-door-card",
        "subcategories": [
          {
            "name": "Sliding door card",
            "slug": "sliding-door-card"
          },
          {
            "name": "Sliding door interior handle",
            "slug": "sliding-door-interior-handle"
          },
          {
            "name": "Sliding door speaker trim",
            "slug": "sliding-door-speaker-trim"
          },
          {
            "name": "Sliding door sun shade/blind",
            "slug": "sliding-door-sun-shadeblind"
          },
          {
            "name": "Sliding door trim",
            "slug": "sliding-door-trim"
          },
          {
            "name": "Trim molding",
            "slug": "trim-molding"
          }
        ]
      },
      {
        "name": "Sound insulation",
        "slug": "sound-insulation",
        "subcategories": [
          {
            "name": "Front door sound insulation",
            "slug": "front-door-sound-insulation"
          },
          {
            "name": "Front sound insulation",
            "slug": "front-sound-insulation"
          },
          {
            "name": "Rear door sound insulation",
            "slug": "rear-door-sound-insulation"
          },
          {
            "name": "Rear sound insulation",
            "slug": "rear-sound-insulation"
          },
          {
            "name": "Roof sound insulation",
            "slug": "roof-sound-insulation"
          },
          {
            "name": "Side door sound insulation",
            "slug": "side-door-sound-insulation"
          },
          {
            "name": "Trunk sound insulation",
            "slug": "trunk-sound-insulation"
          },
          {
            "name": "Under panel sound insulation",
            "slug": "under-panel-sound-insulation"
          }
        ]
      },
      {
        "name": "Steering wheel/steering wheel trim",
        "slug": "steering-wheelsteering-wheel-trim",
        "subcategories": [
          {
            "name": "Airbag slip ring squib (SRS ring)",
            "slug": "airbag-slip-ring-squib-srs-ring"
          },
          {
            "name": "Cruise control stalk",
            "slug": "cruise-control-stalk"
          },
          {
            "name": "Ignition key card reader",
            "slug": "ignition-key-card-reader"
          },
          {
            "name": "Ignition key/card",
            "slug": "ignition-keycard"
          },
          {
            "name": "Ignition lock",
            "slug": "ignition-lock"
          },
          {
            "name": "Ignition lock cable",
            "slug": "ignition-lock-cable"
          },
          {
            "name": "Ignition lock contact",
            "slug": "ignition-lock-contact"
          },
          {
            "name": "Immobiliser reader (aerial)",
            "slug": "immobiliser-reader-aerial"
          },
          {
            "name": "Indicator stalk",
            "slug": "indicator-stalk"
          },
          {
            "name": "Steering column adjust motor",
            "slug": "steering-column-adjust-motor"
          },
          {
            "name": "Steering wheel",
            "slug": "steering-wheel"
          },
          {
            "name": "Steering wheel adjustment handle/lever",
            "slug": "steering-wheel-adjustment-handlelever"
          },
          {
            "name": "Steering wheel column trim",
            "slug": "steering-wheel-column-trim"
          },
          {
            "name": "Steering wheel heating switch",
            "slug": "steering-wheel-heating-switch"
          },
          {
            "name": "Steering wheel lock",
            "slug": "steering-wheel-lock"
          },
          {
            "name": "Steering wheel trim",
            "slug": "steering-wheel-trim"
          },
          {
            "name": "Wiper control stalk",
            "slug": "wiper-control-stalk"
          },
          {
            "name": "Wiper turn signal indicator stalk/switch",
            "slug": "wiper-turn-signal-indicator-stalkswitch"
          }
        ]
      },
      {
        "name": "Tailgate/boot lid cover trim",
        "slug": "tailgateboot-lid-cover-trim",
        "subcategories": [
          {
            "name": "Bottom trim",
            "slug": "bottom-trim"
          },
          {
            "name": "Rear light center trim bar blend",
            "slug": "rear-light-center-trim-bar-blend"
          },
          {
            "name": "Rear light trim",
            "slug": "rear-light-trim"
          },
          {
            "name": "Tailgate emergency lock open trim",
            "slug": "tailgate-emergency-lock-open-trim"
          },
          {
            "name": "Tailgate trunk handle",
            "slug": "tailgate-trunk-handle"
          },
          {
            "name": "Tailgate/boot cover trim set",
            "slug": "tailgateboot-cover-trim-set"
          },
          {
            "name": "Tailgate/boot lid cover trim",
            "slug": "tailgateboot-lid-cover-trim"
          },
          {
            "name": "Tailgate/boot lid lock trim",
            "slug": "tailgateboot-lid-lock-trim"
          },
          {
            "name": "Tailgate/trunk side cover trim",
            "slug": "tailgatetrunk-side-cover-trim"
          },
          {
            "name": "Tailgate/trunk upper cover trim",
            "slug": "tailgatetrunk-upper-cover-trim"
          }
        ]
      },
      {
        "name": "Trunk/boot trim",
        "slug": "trunkboot-trim",
        "subcategories": [
          {
            "name": "(D) pillar trim (bottom)",
            "slug": "d-pillar-trim-bottom"
          },
          {
            "name": "Bracket in trunk/boot",
            "slug": "bracket-in-trunkboot"
          },
          {
            "name": "Curtain motor",
            "slug": "curtain-motor"
          },
          {
            "name": "Estate rear side window sun shade/blind",
            "slug": "estate-rear-side-window-sun-shadeblind"
          },
          {
            "name": "Glove box in trunk",
            "slug": "glove-box-in-trunk"
          },
          {
            "name": "Handrail (top trim)",
            "slug": "handrail-top-trim"
          },
          {
            "name": "Hazard Warning Triangle Mounting Bracket",
            "slug": "hazard-warning-triangle-mounting-bracket"
          },
          {
            "name": "Other trunk/boot trim element",
            "slug": "other-trunkboot-trim-element"
          },
          {
            "name": "Parcel shelf load cover",
            "slug": "parcel-shelf-load-cover"
          },
          {
            "name": "Parcel shelf load cover mount bracket",
            "slug": "parcel-shelf-load-cover-mount-bracket"
          },
          {
            "name": "Parcel shelf load cover trim",
            "slug": "parcel-shelf-load-cover-trim"
          },
          {
            "name": "Seat back rest control lever/handle",
            "slug": "seat-back-rest-control-leverhandle"
          },
          {
            "name": "Ski bag",
            "slug": "ski-bag"
          },
          {
            "name": "Spare wheel section trim",
            "slug": "spare-wheel-section-trim"
          },
          {
            "name": "Tie down hook / loop",
            "slug": "tie-down-hook-loop"
          },
          {
            "name": "Trunk grilles",
            "slug": "trunk-grilles"
          },
          {
            "name": "Trunk separation",
            "slug": "trunk-separation"
          },
          {
            "name": "Trunk/boot cargo luggage net",
            "slug": "trunkboot-cargo-luggage-net"
          },
          {
            "name": "Trunk/boot floor carpet liner",
            "slug": "trunkboot-floor-carpet-liner"
          },
          {
            "name": "Trunk/boot lower side trim panel",
            "slug": "trunkboot-lower-side-trim-panel"
          },
          {
            "name": "Trunk/boot side trim panel",
            "slug": "trunkboot-side-trim-panel"
          },
          {
            "name": "Trunk/boot sill cover protection",
            "slug": "trunkboot-sill-cover-protection"
          },
          {
            "name": "Trunk/boot storage box wall",
            "slug": "trunkboot-storage-box-wall"
          },
          {
            "name": "Trunk/boot trim cover",
            "slug": "trunkboot-trim-cover"
          },
          {
            "name": "Umbrella holder/bracket",
            "slug": "umbrella-holderbracket"
          }
        ]
      }
    ]
  },
  {
    "name": "Devices/switches/electronic system",
    "slug": "devicesswitcheselectronic-system",
    "color": "#000",
    "subcategories": [
      {
        "name": "Battery/battery mounting",
        "slug": "batterybattery-mounting",
        "subcategories": [
          {
            "name": "Battery box tray",
            "slug": "battery-box-tray"
          },
          {
            "name": "Battery box tray cover/lid",
            "slug": "battery-box-tray-coverlid"
          },
          {
            "name": "Battery bracket",
            "slug": "battery-bracket"
          },
          {
            "name": "Battery charger (optional)",
            "slug": "battery-charger-optional"
          },
          {
            "name": "Battery tray",
            "slug": "battery-tray"
          },
          {
            "name": "Battery tray heat shield",
            "slug": "battery-tray-heat-shield"
          },
          {
            "name": "Car battery",
            "slug": "car-battery"
          },
          {
            "name": "Electric battery heater",
            "slug": "electric-battery-heater"
          },
          {
            "name": "Hybrid / electric car battery",
            "slug": "hybrid-electric-car-battery"
          },
          {
            "name": "Hybrid / Electric Car Battery Cell",
            "slug": "hybrid-electric-car-battery-cell"
          },
          {
            "name": "Hybrid/electric vehicle battery bracket",
            "slug": "hybridelectric-vehicle-battery-bracket"
          },
          {
            "name": "Hybrid/electric vehicle battery fan",
            "slug": "hybridelectric-vehicle-battery-fan"
          },
          {
            "name": "Hybrid/electric vehicle battery tray",
            "slug": "hybridelectric-vehicle-battery-tray"
          }
        ]
      },
      {
        "name": "Control units/modules",
        "slug": "control-unitsmodules",
        "subcategories": [
          {
            "name": "ABS control unit/module",
            "slug": "abs-control-unitmodule"
          },
          {
            "name": "Active stabilizer control unit",
            "slug": "active-stabilizer-control-unit"
          },
          {
            "name": "AHM trailer towing control unit/module",
            "slug": "ahm-trailer-towing-control-unitmodule"
          },
          {
            "name": "Air conditioner control unit module",
            "slug": "air-conditioner-control-unit-module"
          },
          {
            "name": "Air conditioning/heating control unit",
            "slug": "air-conditioningheating-control-unit"
          },
          {
            "name": "Air suspension control unit module (rear)",
            "slug": "air-suspension-control-unit-module-rear"
          },
          {
            "name": "Airbag control unit/module",
            "slug": "airbag-control-unitmodule"
          },
          {
            "name": "Alarm control unit/module",
            "slug": "alarm-control-unitmodule"
          },
          {
            "name": "Antenna control unit",
            "slug": "antenna-control-unit"
          },
          {
            "name": "APC control unit/module",
            "slug": "apc-control-unitmodule"
          },
          {
            "name": "ASC control unit/module",
            "slug": "asc-control-unitmodule"
          },
          {
            "name": "Auxiliary heating control unit/module",
            "slug": "auxiliary-heating-control-unitmodule"
          },
          {
            "name": "Battery control module",
            "slug": "battery-control-module"
          },
          {
            "name": "Blind spot module",
            "slug": "blind-spot-module"
          },
          {
            "name": "Bluetooth control unit holder",
            "slug": "bluetooth-control-unit-holder"
          },
          {
            "name": "Bluetooth control unit module",
            "slug": "bluetooth-control-unit-module"
          },
          {
            "name": "Brake system control unit/module",
            "slug": "brake-system-control-unitmodule"
          },
          {
            "name": "BSM Control unit",
            "slug": "bsm-control-unit"
          },
          {
            "name": "Camera control unit module",
            "slug": "camera-control-unit-module"
          },
          {
            "name": "Carburetor control unit/module",
            "slug": "carburetor-control-unitmodule"
          },
          {
            "name": "CAS control unit/module",
            "slug": "cas-control-unitmodule"
          },
          {
            "name": "Center console control module",
            "slug": "center-console-control-module"
          },
          {
            "name": "Central body control module",
            "slug": "central-body-control-module"
          },
          {
            "name": "Central console control unit",
            "slug": "central-console-control-unit"
          },
          {
            "name": "Climate control unit",
            "slug": "climate-control-unit"
          },
          {
            "name": "Combustion control unit/module",
            "slug": "combustion-control-unitmodule"
          },
          {
            "name": "Comfort/convenience module",
            "slug": "comfortconvenience-module"
          },
          {
            "name": "Convertible roof control unit",
            "slug": "convertible-roof-control-unit"
          },
          {
            "name": "Cruise control unit/module",
            "slug": "cruise-control-unitmodule"
          },
          {
            "name": "Door central lock control unit/module",
            "slug": "door-central-lock-control-unitmodule"
          },
          {
            "name": "Door control unit/module",
            "slug": "door-control-unitmodule"
          },
          {
            "name": "Engine control unit box",
            "slug": "engine-control-unit-box"
          },
          {
            "name": "Engine control unit holder",
            "slug": "engine-control-unit-holder"
          },
          {
            "name": "Engine control unit/module",
            "slug": "engine-control-unitmodule"
          },
          {
            "name": "Engine control unit/module ECU",
            "slug": "engine-control-unitmodule-ecu"
          },
          {
            "name": "ESP (stability system) control unit",
            "slug": "esp-stability-system-control-unit"
          },
          {
            "name": "Fan control module",
            "slug": "fan-control-module"
          },
          {
            "name": "Fuel injection control unit/module",
            "slug": "fuel-injection-control-unitmodule"
          },
          {
            "name": "Fuel injection pump control unit/module",
            "slug": "fuel-injection-pump-control-unitmodule"
          },
          {
            "name": "Gateway control module",
            "slug": "gateway-control-module"
          },
          {
            "name": "Gearbox control unit/module",
            "slug": "gearbox-control-unitmodule"
          },
          {
            "name": "GPS navigation control unit/module",
            "slug": "gps-navigation-control-unitmodule"
          },
          {
            "name": "Hand brake control module",
            "slug": "hand-brake-control-module"
          },
          {
            "name": "HiFi Audio sound control unit",
            "slug": "hifi-audio-sound-control-unit"
          },
          {
            "name": "Homelink control unit",
            "slug": "homelink-control-unit"
          },
          {
            "name": "Immobilizer control unit/module",
            "slug": "immobilizer-control-unitmodule"
          },
          {
            "name": "Injection control unit/module",
            "slug": "injection-control-unitmodule"
          },
          {
            "name": "Keyless (KESSY) go control unit/module",
            "slug": "keyless-kessy-go-control-unitmodule"
          },
          {
            "name": "Light module LCM",
            "slug": "light-module-lcm"
          },
          {
            "name": "LP gas control unit module",
            "slug": "lp-gas-control-unit-module"
          },
          {
            "name": "MMI control unit",
            "slug": "mmi-control-unit"
          },
          {
            "name": "MPM control module",
            "slug": "mpm-control-module"
          },
          {
            "name": "Other control units/modules",
            "slug": "other-control-unitsmodules"
          },
          {
            "name": "Parking PDC control unit/module",
            "slug": "parking-pdc-control-unitmodule"
          },
          {
            "name": "Phone control unit/module",
            "slug": "phone-control-unitmodule"
          },
          {
            "name": "Power management control unit",
            "slug": "power-management-control-unit"
          },
          {
            "name": "Power steering control unit/module",
            "slug": "power-steering-control-unitmodule"
          },
          {
            "name": "Rear brake EMF control unit/module",
            "slug": "rear-brake-emf-control-unitmodule"
          },
          {
            "name": "Reducing agents exhaust control unit",
            "slug": "reducing-agents-exhaust-control-unit"
          },
          {
            "name": "SAM control unit",
            "slug": "sam-control-unit"
          },
          {
            "name": "Seat control module",
            "slug": "seat-control-module"
          },
          {
            "name": "Sliding door control unit/module",
            "slug": "sliding-door-control-unitmodule"
          },
          {
            "name": "SOS control module",
            "slug": "sos-control-module"
          },
          {
            "name": "Speedometer control unit/module",
            "slug": "speedometer-control-unitmodule"
          },
          {
            "name": "Start/Stop control module",
            "slug": "startstop-control-module"
          },
          {
            "name": "Start/Stop system kit",
            "slug": "startstop-system-kit"
          },
          {
            "name": "Steering rack control module",
            "slug": "steering-rack-control-module"
          },
          {
            "name": "Sunroof control unit/module",
            "slug": "sunroof-control-unitmodule"
          },
          {
            "name": "Suspension control unit/module",
            "slug": "suspension-control-unitmodule"
          },
          {
            "name": "Tailgate/trunk control unit/module",
            "slug": "tailgatetrunk-control-unitmodule"
          },
          {
            "name": "Tire pressure control unit",
            "slug": "tire-pressure-control-unit"
          },
          {
            "name": "Torque split ecu control unit/module",
            "slug": "torque-split-ecu-control-unitmodule"
          },
          {
            "name": "Tow bar trailer control unit/module",
            "slug": "tow-bar-trailer-control-unitmodule"
          },
          {
            "name": "Transfer box differential control unit",
            "slug": "transfer-box-differential-control-unit"
          },
          {
            "name": "Trunk lid opening control unit",
            "slug": "trunk-lid-opening-control-unit"
          },
          {
            "name": "USB control unit",
            "slug": "usb-control-unit"
          },
          {
            "name": "Video control module",
            "slug": "video-control-module"
          },
          {
            "name": "Voice control module",
            "slug": "voice-control-module"
          },
          {
            "name": "Voltage converter/converter module",
            "slug": "voltage-converterconverter-module"
          },
          {
            "name": "Wing mirror control module",
            "slug": "wing-mirror-control-module"
          },
          {
            "name": "Wireless charging module",
            "slug": "wireless-charging-module"
          },
          {
            "name": "Xenon control unit/module",
            "slug": "xenon-control-unitmodule"
          }
        ]
      },
      {
        "name": "Devices",
        "slug": "devices",
        "subcategories": [
          {
            "name": "Clock",
            "slug": "clock"
          },
          {
            "name": "Distronic sensor radar",
            "slug": "distronic-sensor-radar"
          },
          {
            "name": "Fuel temperature sensor",
            "slug": "fuel-temperature-sensor"
          },
          {
            "name": "Gear shift selector indicator",
            "slug": "gear-shift-selector-indicator"
          },
          {
            "name": "Head up display screen",
            "slug": "head-up-display-screen"
          },
          {
            "name": "Night vision camera",
            "slug": "night-vision-camera"
          },
          {
            "name": "Oil temperature sensor",
            "slug": "oil-temperature-sensor"
          },
          {
            "name": "Other dashboard",
            "slug": "other-dashboard"
          },
          {
            "name": "Other devices",
            "slug": "other-devices"
          },
          {
            "name": "Outside/external air temperature sensor",
            "slug": "outsideexternal-air-temperature-sensor"
          },
          {
            "name": "Parking PDC sensor display screen",
            "slug": "parking-pdc-sensor-display-screen"
          },
          {
            "name": "Phone",
            "slug": "phone"
          },
          {
            "name": "Screen/display/small screen",
            "slug": "screendisplaysmall-screen"
          },
          {
            "name": "Side fender camera",
            "slug": "side-fender-camera"
          },
          {
            "name": "Speedometer (instrument cluster)",
            "slug": "speedometer-instrument-cluster"
          },
          {
            "name": "Tachometer",
            "slug": "tachometer"
          },
          {
            "name": "Taximeter",
            "slug": "taximeter"
          },
          {
            "name": "Turbo air boost pressure sensor",
            "slug": "turbo-air-boost-pressure-sensor"
          },
          {
            "name": "Voltage converter inverter",
            "slug": "voltage-converter-inverter"
          },
          {
            "name": "Voltmeter",
            "slug": "voltmeter"
          },
          {
            "name": "Windshield/windscreen camera",
            "slug": "windshieldwindscreen-camera"
          }
        ]
      },
      {
        "name": "Fuses/fuse boxes",
        "slug": "fusesfuse-boxes",
        "subcategories": [
          {
            "name": "Battery relay fuse",
            "slug": "battery-relay-fuse"
          },
          {
            "name": "Fuse",
            "slug": "fuse"
          },
          {
            "name": "Fuse box cover",
            "slug": "fuse-box-cover"
          },
          {
            "name": "Fuse box set",
            "slug": "fuse-box-set"
          },
          {
            "name": "Fuse module",
            "slug": "fuse-module"
          },
          {
            "name": "High voltage junction box",
            "slug": "high-voltage-junction-box"
          }
        ]
      },
      {
        "name": "Installation/wiring harness",
        "slug": "installationwiring-harness",
        "subcategories": [
          {
            "name": "12 V Socket (front)",
            "slug": "12-v-socket-front"
          },
          {
            "name": "12 V Socket (rear)",
            "slug": "12-v-socket-rear"
          },
          {
            "name": "ABS module connector plug",
            "slug": "abs-module-connector-plug"
          },
          {
            "name": "Airbag squib ring wiring",
            "slug": "airbag-squib-ring-wiring"
          },
          {
            "name": "Camera wiring loom",
            "slug": "camera-wiring-loom"
          },
          {
            "name": "CD changer wiring",
            "slug": "cd-changer-wiring"
          },
          {
            "name": "Cooling fan wiring",
            "slug": "cooling-fan-wiring"
          },
          {
            "name": "Electric car charge socket",
            "slug": "electric-car-charge-socket"
          },
          {
            "name": "Electric car charge socket cover",
            "slug": "electric-car-charge-socket-cover"
          },
          {
            "name": "Electric car charging cable",
            "slug": "electric-car-charging-cable"
          },
          {
            "name": "Engine installation wiring loom",
            "slug": "engine-installation-wiring-loom"
          },
          {
            "name": "EUR ISO radio connector",
            "slug": "eur-iso-radio-connector"
          },
          {
            "name": "Front ABS sensor wiring",
            "slug": "front-abs-sensor-wiring"
          },
          {
            "name": "Front door wiring loom",
            "slug": "front-door-wiring-loom"
          },
          {
            "name": "Fuel injector wires",
            "slug": "fuel-injector-wires"
          },
          {
            "name": "Gearbox/transmission wiring loom",
            "slug": "gearboxtransmission-wiring-loom"
          },
          {
            "name": "Glow plug wires",
            "slug": "glow-plug-wires"
          },
          {
            "name": "Headlight/headlamp wiring loom/harness",
            "slug": "headlightheadlamp-wiring-loomharness"
          },
          {
            "name": "High voltage cable",
            "slug": "high-voltage-cable"
          },
          {
            "name": "Left interior wiring harness",
            "slug": "left-interior-wiring-harness"
          },
          {
            "name": "Loading door wiring loom",
            "slug": "loading-door-wiring-loom"
          },
          {
            "name": "Negative earth cable (battery)",
            "slug": "negative-earth-cable-battery"
          },
          {
            "name": "Other wiring loom",
            "slug": "other-wiring-loom"
          },
          {
            "name": "Panel wiring",
            "slug": "panel-wiring"
          },
          {
            "name": "Parking sensor (PDC) wiring loom",
            "slug": "parking-sensor-pdc-wiring-loom"
          },
          {
            "name": "Plug wire",
            "slug": "plug-wire"
          },
          {
            "name": "Positive cable (battery)",
            "slug": "positive-cable-battery"
          },
          {
            "name": "Positive wiring loom",
            "slug": "positive-wiring-loom"
          },
          {
            "name": "Rear ABS sensor wiring",
            "slug": "rear-abs-sensor-wiring"
          },
          {
            "name": "Rear door wiring loom",
            "slug": "rear-door-wiring-loom"
          },
          {
            "name": "Rear tail light wiring loom",
            "slug": "rear-tail-light-wiring-loom"
          },
          {
            "name": "Right interior wiring harness",
            "slug": "right-interior-wiring-harness"
          },
          {
            "name": "Seat wiring loom",
            "slug": "seat-wiring-loom"
          },
          {
            "name": "Sliding door wiring loom",
            "slug": "sliding-door-wiring-loom"
          },
          {
            "name": "Sound system wiring loom",
            "slug": "sound-system-wiring-loom"
          },
          {
            "name": "Tailgate/trunk wiring harness",
            "slug": "tailgatetrunk-wiring-harness"
          },
          {
            "name": "Wiring harness",
            "slug": "wiring-harness"
          }
        ]
      },
      {
        "name": "Other devices",
        "slug": "other-devices",
        "subcategories": [
          {
            "name": "Alarm system siren",
            "slug": "alarm-system-siren"
          },
          {
            "name": "Bluetooth antenna",
            "slug": "bluetooth-antenna"
          },
          {
            "name": "Central locking motor",
            "slug": "central-locking-motor"
          },
          {
            "name": "Central locking vacuum pump",
            "slug": "central-locking-vacuum-pump"
          },
          {
            "name": "Engine control unit/module fan",
            "slug": "engine-control-unitmodule-fan"
          },
          {
            "name": "Engine ECU kit and lock set",
            "slug": "engine-ecu-kit-and-lock-set"
          },
          {
            "name": "Horn signal",
            "slug": "horn-signal"
          },
          {
            "name": "Horn signal holder/bracket",
            "slug": "horn-signal-holderbracket"
          },
          {
            "name": "Interior comfort aerial antenna",
            "slug": "interior-comfort-aerial-antenna"
          },
          {
            "name": "Keyless system antenna",
            "slug": "keyless-system-antenna"
          },
          {
            "name": "Phone keyboard",
            "slug": "phone-keyboard"
          },
          {
            "name": "Webasto auxiliary heater remote control",
            "slug": "webasto-auxiliary-heater-remote-control"
          },
          {
            "name": "Webasto remote control set",
            "slug": "webasto-remote-control-set"
          }
        ]
      },
      {
        "name": "Relays",
        "slug": "relays",
        "subcategories": [
          {
            "name": "ABS relay",
            "slug": "abs-relay"
          },
          {
            "name": "Alarm relay",
            "slug": "alarm-relay"
          },
          {
            "name": "Central locking relay",
            "slug": "central-locking-relay"
          },
          {
            "name": "Charging relay",
            "slug": "charging-relay"
          },
          {
            "name": "Combustion relay",
            "slug": "combustion-relay"
          },
          {
            "name": "Coolant fan relay",
            "slug": "coolant-fan-relay"
          },
          {
            "name": "Coolant level relay",
            "slug": "coolant-level-relay"
          },
          {
            "name": "Cruise control relay",
            "slug": "cruise-control-relay"
          },
          {
            "name": "Current control relay",
            "slug": "current-control-relay"
          },
          {
            "name": "Day light relay",
            "slug": "day-light-relay"
          },
          {
            "name": "Electric power window relay",
            "slug": "electric-power-window-relay"
          },
          {
            "name": "Fuel level meter relay",
            "slug": "fuel-level-meter-relay"
          },
          {
            "name": "Fuel pump relay",
            "slug": "fuel-pump-relay"
          },
          {
            "name": "Gear shift indicator relay",
            "slug": "gear-shift-indicator-relay"
          },
          {
            "name": "Glow plug pre-heat relay",
            "slug": "glow-plug-pre-heat-relay"
          },
          {
            "name": "Hazard warning light relay",
            "slug": "hazard-warning-light-relay"
          },
          {
            "name": "Heater blower fan relay",
            "slug": "heater-blower-fan-relay"
          },
          {
            "name": "Horn buzzer relay",
            "slug": "horn-buzzer-relay"
          },
          {
            "name": "Idle relay",
            "slug": "idle-relay"
          },
          {
            "name": "Ignition relay",
            "slug": "ignition-relay"
          },
          {
            "name": "Ignition-blocking relay",
            "slug": "ignition-blocking-relay"
          },
          {
            "name": "Indicator relay",
            "slug": "indicator-relay"
          },
          {
            "name": "Interior lighting relay",
            "slug": "interior-lighting-relay"
          },
          {
            "name": "Light relay",
            "slug": "light-relay"
          },
          {
            "name": "Light washer relay",
            "slug": "light-washer-relay"
          },
          {
            "name": "Oil pressure relay",
            "slug": "oil-pressure-relay"
          },
          {
            "name": "Other relay",
            "slug": "other-relay"
          },
          {
            "name": "Rear light relay",
            "slug": "rear-light-relay"
          },
          {
            "name": "Relay mounting block",
            "slug": "relay-mounting-block"
          },
          {
            "name": "Seat belt warning relay",
            "slug": "seat-belt-warning-relay"
          },
          {
            "name": "Seat heating relay",
            "slug": "seat-heating-relay"
          },
          {
            "name": "Tow bar relay",
            "slug": "tow-bar-relay"
          },
          {
            "name": "Window control relay",
            "slug": "window-control-relay"
          },
          {
            "name": "Window washer relay",
            "slug": "window-washer-relay"
          },
          {
            "name": "Window wiper interval relay",
            "slug": "window-wiper-interval-relay"
          },
          {
            "name": "Window wiper relay",
            "slug": "window-wiper-relay"
          }
        ]
      },
      {
        "name": "Sensors",
        "slug": "sensors",
        "subcategories": [
          {
            "name": "Airbag deployment crash/impact sensor",
            "slug": "airbag-deployment-crashimpact-sensor"
          },
          {
            "name": "Alarm movement detector/sensor",
            "slug": "alarm-movement-detectorsensor"
          },
          {
            "name": "AUC sensor",
            "slug": "auc-sensor"
          },
          {
            "name": "Brake pads wear sensor",
            "slug": "brake-pads-wear-sensor"
          },
          {
            "name": "Brake pedal sensor switch",
            "slug": "brake-pedal-sensor-switch"
          },
          {
            "name": "Breather hose sensor",
            "slug": "breather-hose-sensor"
          },
          {
            "name": "Clutch pedal sensor",
            "slug": "clutch-pedal-sensor"
          },
          {
            "name": "ESP acceleration yaw rate sensor",
            "slug": "esp-acceleration-yaw-rate-sensor"
          },
          {
            "name": "Exhaust pressure sensor",
            "slug": "exhaust-pressure-sensor"
          },
          {
            "name": "Fuel cut-off switch",
            "slug": "fuel-cut-off-switch"
          },
          {
            "name": "Hand parking brake sensor",
            "slug": "hand-parking-brake-sensor"
          },
          {
            "name": "Interior temperature sensor",
            "slug": "interior-temperature-sensor"
          },
          {
            "name": "Liftgate motion sensor",
            "slug": "liftgate-motion-sensor"
          },
          {
            "name": "Oil pressure sensor",
            "slug": "oil-pressure-sensor"
          },
          {
            "name": "Outside/exterior temperature sensor",
            "slug": "outsideexterior-temperature-sensor"
          },
          {
            "name": "Parking PDC sensor",
            "slug": "parking-pdc-sensor"
          },
          {
            "name": "Rain sensor",
            "slug": "rain-sensor"
          },
          {
            "name": "Reversing light switch sensor",
            "slug": "reversing-light-switch-sensor"
          },
          {
            "name": "Seat pressure sensor",
            "slug": "seat-pressure-sensor"
          },
          {
            "name": "Sensor",
            "slug": "sensor"
          },
          {
            "name": "Speed sensor (speedometer sensor)",
            "slug": "speed-sensor-speedometer-sensor"
          },
          {
            "name": "Speedometer cable",
            "slug": "speedometer-cable"
          },
          {
            "name": "Steering angle sensor",
            "slug": "steering-angle-sensor"
          },
          {
            "name": "Sun solar sensor",
            "slug": "sun-solar-sensor"
          },
          {
            "name": "Tailgate sensor",
            "slug": "tailgate-sensor"
          },
          {
            "name": "Tire pressure sensor",
            "slug": "tire-pressure-sensor"
          },
          {
            "name": "Ultrasonic Sensor",
            "slug": "ultrasonic-sensor"
          },
          {
            "name": "Yaw turn rate sensor",
            "slug": "yaw-turn-rate-sensor"
          }
        ]
      },
      {
        "name": "Sound system/GPS/radio",
        "slug": "sound-systemgpsradio",
        "subcategories": [
          {
            "name": "Aerial antenna amplifier",
            "slug": "aerial-antenna-amplifier"
          },
          {
            "name": "Aerial antenna filter",
            "slug": "aerial-antenna-filter"
          },
          {
            "name": "Audio system kit",
            "slug": "audio-system-kit"
          },
          {
            "name": "AUX in-socket connector",
            "slug": "aux-in-socket-connector"
          },
          {
            "name": "CD/DVD changer",
            "slug": "cddvd-changer"
          },
          {
            "name": "Front door high frequency speaker",
            "slug": "front-door-high-frequency-speaker"
          },
          {
            "name": "Front door speaker",
            "slug": "front-door-speaker"
          },
          {
            "name": "Hands-free kit",
            "slug": "hands-free-kit"
          },
          {
            "name": "Head unit multimedia control",
            "slug": "head-unit-multimedia-control"
          },
          {
            "name": "Headliner speaker",
            "slug": "headliner-speaker"
          },
          {
            "name": "High frequency speaker in the rear doors",
            "slug": "high-frequency-speaker-in-the-rear-doors"
          },
          {
            "name": "iPod connector socket",
            "slug": "ipod-connector-socket"
          },
          {
            "name": "Microphone (bluetooth/phone)",
            "slug": "microphone-bluetoothphone"
          },
          {
            "name": "Navigation GPS unit bracket/holder",
            "slug": "navigation-gps-unit-bracketholder"
          },
          {
            "name": "Navigation maps CD/DVD",
            "slug": "navigation-maps-cddvd"
          },
          {
            "name": "Navigation unit CD/DVD player",
            "slug": "navigation-unit-cddvd-player"
          },
          {
            "name": "Panel speaker",
            "slug": "panel-speaker"
          },
          {
            "name": "Parcel shelf speaker",
            "slug": "parcel-shelf-speaker"
          },
          {
            "name": "Parking PDC sensor speaker",
            "slug": "parking-pdc-sensor-speaker"
          },
          {
            "name": "Radio/CD/DVD/GPS head unit",
            "slug": "radiocddvdgps-head-unit"
          },
          {
            "name": "Rear door speaker",
            "slug": "rear-door-speaker"
          },
          {
            "name": "Sound amplifier",
            "slug": "sound-amplifier"
          },
          {
            "name": "Sound amplifier holder/bracket",
            "slug": "sound-amplifier-holderbracket"
          },
          {
            "name": "Subwoofer grill/trim",
            "slug": "subwoofer-grilltrim"
          },
          {
            "name": "Subwoofer speaker",
            "slug": "subwoofer-speaker"
          },
          {
            "name": "USB socket connector",
            "slug": "usb-socket-connector"
          }
        ]
      },
      {
        "name": "Switches",
        "slug": "switches",
        "subcategories": [
          {
            "name": "A set of switches",
            "slug": "a-set-of-switches"
          },
          {
            "name": "ABS switch",
            "slug": "abs-switch"
          },
          {
            "name": "Aerial antenna switch",
            "slug": "aerial-antenna-switch"
          },
          {
            "name": "Air circulation switch",
            "slug": "air-circulation-switch"
          },
          {
            "name": "Air conditioning (A/C) switch",
            "slug": "air-conditioning-ac-switch"
          },
          {
            "name": "Alarm switch",
            "slug": "alarm-switch"
          },
          {
            "name": "Car heater timer (Webasto)",
            "slug": "car-heater-timer-webasto"
          },
          {
            "name": "Central locking switch button",
            "slug": "central-locking-switch-button"
          },
          {
            "name": "Child safety switch",
            "slug": "child-safety-switch"
          },
          {
            "name": "Cruise control switch",
            "slug": "cruise-control-switch"
          },
          {
            "name": "Differential lock switch",
            "slug": "differential-lock-switch"
          },
          {
            "name": "DTC switch",
            "slug": "dtc-switch"
          },
          {
            "name": "Electric sliding door switch",
            "slug": "electric-sliding-door-switch"
          },
          {
            "name": "Electric window control switch",
            "slug": "electric-window-control-switch"
          },
          {
            "name": "Engine start stop button switch",
            "slug": "engine-start-stop-button-switch"
          },
          {
            "name": "ESP (stability program) switch",
            "slug": "esp-stability-program-switch"
          },
          {
            "name": "Fog light switch",
            "slug": "fog-light-switch"
          },
          {
            "name": "Fuel (gas) shift switch",
            "slug": "fuel-gas-shift-switch"
          },
          {
            "name": "Fuel tank opening switch",
            "slug": "fuel-tank-opening-switch"
          },
          {
            "name": "Garage door switch",
            "slug": "garage-door-switch"
          },
          {
            "name": "Gear shift switch/knob",
            "slug": "gear-shift-switchknob"
          },
          {
            "name": "Hand parking brake switch",
            "slug": "hand-parking-brake-switch"
          },
          {
            "name": "Handbrake/parking brake auto hold switch",
            "slug": "handbrakeparking-brake-auto-hold-switch"
          },
          {
            "name": "Hazard light switch",
            "slug": "hazard-light-switch"
          },
          {
            "name": "Headlight level height control switch",
            "slug": "headlight-level-height-control-switch"
          },
          {
            "name": "Headlight washer switch",
            "slug": "headlight-washer-switch"
          },
          {
            "name": "Headlight wiper switch",
            "slug": "headlight-wiper-switch"
          },
          {
            "name": "Interior fan control switch",
            "slug": "interior-fan-control-switch"
          },
          {
            "name": "Interior lighting switch",
            "slug": "interior-lighting-switch"
          },
          {
            "name": "Light switch",
            "slug": "light-switch"
          },
          {
            "name": "Mirror heating switch",
            "slug": "mirror-heating-switch"
          },
          {
            "name": "Multifunctional control switch/knob",
            "slug": "multifunctional-control-switchknob"
          },
          {
            "name": "On-board computer control switch",
            "slug": "on-board-computer-control-switch"
          },
          {
            "name": "Other switches/knobs/shifts",
            "slug": "other-switchesknobsshifts"
          },
          {
            "name": "Panel lighting control switch",
            "slug": "panel-lighting-control-switch"
          },
          {
            "name": "Parking (PDC) sensor switch",
            "slug": "parking-pdc-sensor-switch"
          },
          {
            "name": "Passenger airbag on/off switch",
            "slug": "passenger-airbag-onoff-switch"
          },
          {
            "name": "Quarter vent window switch",
            "slug": "quarter-vent-window-switch"
          },
          {
            "name": "Seat control switch",
            "slug": "seat-control-switch"
          },
          {
            "name": "Seat heating switch",
            "slug": "seat-heating-switch"
          },
          {
            "name": "Seat memory switch",
            "slug": "seat-memory-switch"
          },
          {
            "name": "Sos button",
            "slug": "sos-button"
          },
          {
            "name": "Sound control switch",
            "slug": "sound-control-switch"
          },
          {
            "name": "Steering wheel adjustment switch",
            "slug": "steering-wheel-adjustment-switch"
          },
          {
            "name": "Steering wheel buttons/switches",
            "slug": "steering-wheel-buttonsswitches"
          },
          {
            "name": "Sunroof switch",
            "slug": "sunroof-switch"
          },
          {
            "name": "Suspension ride height/mode switch",
            "slug": "suspension-ride-heightmode-switch"
          },
          {
            "name": "Tailgate opening switch",
            "slug": "tailgate-opening-switch"
          },
          {
            "name": "Tailgate/boot open switch button",
            "slug": "tailgateboot-open-switch-button"
          },
          {
            "name": "TPMS reset button",
            "slug": "tpms-reset-button"
          },
          {
            "name": "Traction control (ASR) switch",
            "slug": "traction-control-asr-switch"
          },
          {
            "name": "Windscreen/window heater switch",
            "slug": "windscreenwindow-heater-switch"
          },
          {
            "name": "Wing mirror switch",
            "slug": "wing-mirror-switch"
          },
          {
            "name": "Wiper speed switch",
            "slug": "wiper-speed-switch"
          },
          {
            "name": "Wiper switch",
            "slug": "wiper-switch"
          }
        ]
      }
    ]
  },
  {
    "name": "Door",
    "slug": "door",
    "color": "#000",
    "subcategories": [
      {
        "name": "Back/rear loading door",
        "slug": "backrear-loading-door",
        "subcategories": [
          {
            "name": "Back/rear loading door",
            "slug": "backrear-loading-door"
          },
          {
            "name": "Loading door cable line",
            "slug": "loading-door-cable-line"
          },
          {
            "name": "Loading door check strap stopper",
            "slug": "loading-door-check-strap-stopper"
          },
          {
            "name": "Loading door cover/cap",
            "slug": "loading-door-covercap"
          },
          {
            "name": "Loading door exterior handle",
            "slug": "loading-door-exterior-handle"
          },
          {
            "name": "Loading door exterior handle/bracket",
            "slug": "loading-door-exterior-handlebracket"
          },
          {
            "name": "Loading door glass trim molding",
            "slug": "loading-door-glass-trim-molding"
          },
          {
            "name": "Loading door hinge set",
            "slug": "loading-door-hinge-set"
          },
          {
            "name": "Loading door interior handle",
            "slug": "loading-door-interior-handle"
          },
          {
            "name": "Loading door lock",
            "slug": "loading-door-lock"
          },
          {
            "name": "Loading door lock loop/hook striker",
            "slug": "loading-door-lock-loophook-striker"
          },
          {
            "name": "Loading door lower hinge",
            "slug": "loading-door-lower-hinge"
          },
          {
            "name": "Loading door rubber seal (on body)",
            "slug": "loading-door-rubber-seal-on-body"
          },
          {
            "name": "Loading door sensor",
            "slug": "loading-door-sensor"
          },
          {
            "name": "Loading door sun blind/shade",
            "slug": "loading-door-sun-blindshade"
          },
          {
            "name": "Loading door trim (molding)",
            "slug": "loading-door-trim-molding"
          },
          {
            "name": "Loading door upper hinge",
            "slug": "loading-door-upper-hinge"
          },
          {
            "name": "Rear loading door model letters",
            "slug": "rear-loading-door-model-letters"
          },
          {
            "name": "Rubber seal loading door",
            "slug": "rubber-seal-loading-door"
          },
          {
            "name": "Rubber seal loading door window/glass",
            "slug": "rubber-seal-loading-door-windowglass"
          },
          {
            "name": "Tailgate van guard window grilles",
            "slug": "tailgate-van-guard-window-grilles"
          }
        ]
      },
      {
        "name": "Front door (four-door)",
        "slug": "front-door-four-door",
        "subcategories": [
          {
            "name": "Front door",
            "slug": "front-door"
          },
          {
            "name": "Front door blower motor",
            "slug": "front-door-blower-motor"
          },
          {
            "name": "Front door cable line",
            "slug": "front-door-cable-line"
          },
          {
            "name": "Front door check strap stopper",
            "slug": "front-door-check-strap-stopper"
          },
          {
            "name": "Front door electric wing mirror",
            "slug": "front-door-electric-wing-mirror"
          },
          {
            "name": "Front door emblem/model letters",
            "slug": "front-door-emblemmodel-letters"
          },
          {
            "name": "Front door exterior handle",
            "slug": "front-door-exterior-handle"
          },
          {
            "name": "Front door exterior handle/bracket",
            "slug": "front-door-exterior-handlebracket"
          },
          {
            "name": "Front door glass trim molding",
            "slug": "front-door-glass-trim-molding"
          },
          {
            "name": "Front door handle cover",
            "slug": "front-door-handle-cover"
          },
          {
            "name": "Front door hinge set",
            "slug": "front-door-hinge-set"
          },
          {
            "name": "Front door interior handle",
            "slug": "front-door-interior-handle"
          },
          {
            "name": "Front door lock",
            "slug": "front-door-lock"
          },
          {
            "name": "Front door lock (next to the handle)",
            "slug": "front-door-lock-next-to-the-handle"
          },
          {
            "name": "Front door lock loop/hook striker",
            "slug": "front-door-lock-loophook-striker"
          },
          {
            "name": "Front door lock motor",
            "slug": "front-door-lock-motor"
          },
          {
            "name": "Front door lower hinge",
            "slug": "front-door-lower-hinge"
          },
          {
            "name": "Front door manual window regulator",
            "slug": "front-door-manual-window-regulator"
          },
          {
            "name": "Front door rubber seal",
            "slug": "front-door-rubber-seal"
          },
          {
            "name": "Front door sensor",
            "slug": "front-door-sensor"
          },
          {
            "name": "Front door soft close latching motor",
            "slug": "front-door-soft-close-latching-motor"
          },
          {
            "name": "Front door trim (molding)",
            "slug": "front-door-trim-molding"
          },
          {
            "name": "Front door upper hinge",
            "slug": "front-door-upper-hinge"
          },
          {
            "name": "Front door wind deflector",
            "slug": "front-door-wind-deflector"
          },
          {
            "name": "Front door window regulator motor",
            "slug": "front-door-window-regulator-motor"
          },
          {
            "name": "Front door window regulator with motor",
            "slug": "front-door-window-regulator-with-motor"
          },
          {
            "name": "Front door window/glass frame",
            "slug": "front-door-windowglass-frame"
          },
          {
            "name": "Front door windshield rail",
            "slug": "front-door-windshield-rail"
          },
          {
            "name": "Front door wing mirror part",
            "slug": "front-door-wing-mirror-part"
          },
          {
            "name": "Front door wiring loom/harness boot",
            "slug": "front-door-wiring-loomharness-boot"
          },
          {
            "name": "Front window lifting mechanism without motor",
            "slug": "front-window-lifting-mechanism-without-motor"
          },
          {
            "name": "Lock set",
            "slug": "lock-set"
          },
          {
            "name": "Manual wing mirror",
            "slug": "manual-wing-mirror"
          },
          {
            "name": "Plastic wing mirror trim cover",
            "slug": "plastic-wing-mirror-trim-cover"
          },
          {
            "name": "Rubber seal front door (on door)",
            "slug": "rubber-seal-front-door-on-door"
          },
          {
            "name": "Rubber seal front door window/glass",
            "slug": "rubber-seal-front-door-windowglass"
          },
          {
            "name": "Wing mirror camera",
            "slug": "wing-mirror-camera"
          },
          {
            "name": "Wing mirror glass",
            "slug": "wing-mirror-glass"
          }
        ]
      },
      {
        "name": "Front door coupe",
        "slug": "front-door-coupe",
        "subcategories": [
          {
            "name": "Coupe door lock (next to the handle)",
            "slug": "coupe-door-lock-next-to-the-handle"
          },
          {
            "name": "Coupe wind mirror (mechanical)",
            "slug": "coupe-wind-mirror-mechanical"
          },
          {
            "name": "Door (2 Door Coupe)",
            "slug": "door-2-door-coupe"
          },
          {
            "name": "Front door blower motor",
            "slug": "front-door-blower-motor"
          },
          {
            "name": "Front door cable line",
            "slug": "front-door-cable-line"
          },
          {
            "name": "Front door check strap stopper",
            "slug": "front-door-check-strap-stopper"
          },
          {
            "name": "Front door coupe exterior handle/bracket",
            "slug": "front-door-coupe-exterior-handlebracket"
          },
          {
            "name": "Front door coupe wind deflector",
            "slug": "front-door-coupe-wind-deflector"
          },
          {
            "name": "Front door coupe window/glass frame",
            "slug": "front-door-coupe-windowglass-frame"
          },
          {
            "name": "Front door cover/cap",
            "slug": "front-door-covercap"
          },
          {
            "name": "Front door electric window regulator",
            "slug": "front-door-electric-window-regulator"
          },
          {
            "name": "Front door electric wing mirror",
            "slug": "front-door-electric-wing-mirror"
          },
          {
            "name": "Front door exterior handle",
            "slug": "front-door-exterior-handle"
          },
          {
            "name": "Front door glass trim molding",
            "slug": "front-door-glass-trim-molding"
          },
          {
            "name": "Front door hinges set",
            "slug": "front-door-hinges-set"
          },
          {
            "name": "Front door interior handle",
            "slug": "front-door-interior-handle"
          },
          {
            "name": "Front door lock",
            "slug": "front-door-lock"
          },
          {
            "name": "Front door lock loop/hook striker",
            "slug": "front-door-lock-loophook-striker"
          },
          {
            "name": "Front door lock motor",
            "slug": "front-door-lock-motor"
          },
          {
            "name": "Front door lower hinge",
            "slug": "front-door-lower-hinge"
          },
          {
            "name": "Front door manual window regulator",
            "slug": "front-door-manual-window-regulator"
          },
          {
            "name": "Front door rubber seal",
            "slug": "front-door-rubber-seal"
          },
          {
            "name": "Front door sensor coupe",
            "slug": "front-door-sensor-coupe"
          },
          {
            "name": "Front door soft close latching motor (coupe)",
            "slug": "front-door-soft-close-latching-motor-coupe"
          },
          {
            "name": "Front door trim (molding)",
            "slug": "front-door-trim-molding"
          },
          {
            "name": "Front door upper hinge",
            "slug": "front-door-upper-hinge"
          },
          {
            "name": "Front door window regulator motor",
            "slug": "front-door-window-regulator-motor"
          },
          {
            "name": "Front door window regulator with motor",
            "slug": "front-door-window-regulator-with-motor"
          },
          {
            "name": "Front door wing mirror part",
            "slug": "front-door-wing-mirror-part"
          },
          {
            "name": "Front door wiring loom/harness boot",
            "slug": "front-door-wiring-loomharness-boot"
          },
          {
            "name": "Plastic wing mirror trim cover",
            "slug": "plastic-wing-mirror-trim-cover"
          },
          {
            "name": "Rubber seal front coupe door",
            "slug": "rubber-seal-front-coupe-door"
          },
          {
            "name": "Rubber seal front coupe door window",
            "slug": "rubber-seal-front-coupe-door-window"
          },
          {
            "name": "Wing mirror camera",
            "slug": "wing-mirror-camera"
          },
          {
            "name": "Wing mirror glass",
            "slug": "wing-mirror-glass"
          }
        ]
      },
      {
        "name": "Rear door",
        "slug": "rear-door",
        "subcategories": [
          {
            "name": "Rear door",
            "slug": "rear-door"
          },
          {
            "name": "Rear door cable line",
            "slug": "rear-door-cable-line"
          },
          {
            "name": "Rear door check strap stopper",
            "slug": "rear-door-check-strap-stopper"
          },
          {
            "name": "Rear door curtain motor",
            "slug": "rear-door-curtain-motor"
          },
          {
            "name": "Rear door emblem/model letters",
            "slug": "rear-door-emblemmodel-letters"
          },
          {
            "name": "Rear door exterior handle",
            "slug": "rear-door-exterior-handle"
          },
          {
            "name": "Rear door exterior handle/bracket",
            "slug": "rear-door-exterior-handlebracket"
          },
          {
            "name": "Rear door glass trim molding",
            "slug": "rear-door-glass-trim-molding"
          },
          {
            "name": "Rear door handle cover",
            "slug": "rear-door-handle-cover"
          },
          {
            "name": "Rear door hinge set",
            "slug": "rear-door-hinge-set"
          },
          {
            "name": "Rear door interior handle",
            "slug": "rear-door-interior-handle"
          },
          {
            "name": "Rear door lock",
            "slug": "rear-door-lock"
          },
          {
            "name": "Rear door lock loop/hook striker",
            "slug": "rear-door-lock-loophook-striker"
          },
          {
            "name": "Rear door lower hinge",
            "slug": "rear-door-lower-hinge"
          },
          {
            "name": "Rear door manual window regulator",
            "slug": "rear-door-manual-window-regulator"
          },
          {
            "name": "Rear door rubber seal (on body)",
            "slug": "rear-door-rubber-seal-on-body"
          },
          {
            "name": "Rear door sensor",
            "slug": "rear-door-sensor"
          },
          {
            "name": "Rear door soft close latching motor",
            "slug": "rear-door-soft-close-latching-motor"
          },
          {
            "name": "Rear door sun blind/shade",
            "slug": "rear-door-sun-blindshade"
          },
          {
            "name": "Rear door trim (molding)",
            "slug": "rear-door-trim-molding"
          },
          {
            "name": "Rear door upper hinge",
            "slug": "rear-door-upper-hinge"
          },
          {
            "name": "Rear door wind deflector",
            "slug": "rear-door-wind-deflector"
          },
          {
            "name": "Rear door window regulator motor",
            "slug": "rear-door-window-regulator-motor"
          },
          {
            "name": "Rear door window regulator with motor",
            "slug": "rear-door-window-regulator-with-motor"
          },
          {
            "name": "Rear door window/glass frame",
            "slug": "rear-door-windowglass-frame"
          },
          {
            "name": "Rear door windshield rail",
            "slug": "rear-door-windshield-rail"
          },
          {
            "name": "Rear lock motor",
            "slug": "rear-lock-motor"
          },
          {
            "name": "Rear window lifting mechanism without motor",
            "slug": "rear-window-lifting-mechanism-without-motor"
          },
          {
            "name": "Rear wire harness sleeve",
            "slug": "rear-wire-harness-sleeve"
          },
          {
            "name": "Rubber seal rear door",
            "slug": "rubber-seal-rear-door"
          },
          {
            "name": "Rubber seal rear door window/glass",
            "slug": "rubber-seal-rear-door-windowglass"
          }
        ]
      },
      {
        "name": "Side sliding door",
        "slug": "side-sliding-door",
        "subcategories": [
          {
            "name": "Door glass rail",
            "slug": "door-glass-rail"
          },
          {
            "name": "Door glass trim",
            "slug": "door-glass-trim"
          },
          {
            "name": "Roller guide/hinge set",
            "slug": "roller-guidehinge-set"
          },
          {
            "name": "Rubber seal sliding door (on door)",
            "slug": "rubber-seal-sliding-door-on-door"
          },
          {
            "name": "Rubber seal sliding door window/glass",
            "slug": "rubber-seal-sliding-door-windowglass"
          },
          {
            "name": "Side sliding door",
            "slug": "side-sliding-door"
          },
          {
            "name": "Sliding door bottom rail",
            "slug": "sliding-door-bottom-rail"
          },
          {
            "name": "Sliding door cable line",
            "slug": "sliding-door-cable-line"
          },
          {
            "name": "Sliding door check strap stopper",
            "slug": "sliding-door-check-strap-stopper"
          },
          {
            "name": "Sliding door contact joint",
            "slug": "sliding-door-contact-joint"
          },
          {
            "name": "Sliding door cover cap",
            "slug": "sliding-door-cover-cap"
          },
          {
            "name": "Sliding door electric window regulator",
            "slug": "sliding-door-electric-window-regulator"
          },
          {
            "name": "Sliding door exterior handle",
            "slug": "sliding-door-exterior-handle"
          },
          {
            "name": "Sliding door exterior handle/bracket",
            "slug": "sliding-door-exterior-handlebracket"
          },
          {
            "name": "Sliding door interior handle",
            "slug": "sliding-door-interior-handle"
          },
          {
            "name": "Sliding door latching motor",
            "slug": "sliding-door-latching-motor"
          },
          {
            "name": "Sliding door lock",
            "slug": "sliding-door-lock"
          },
          {
            "name": "Sliding door lock loop/hook striker",
            "slug": "sliding-door-lock-loophook-striker"
          },
          {
            "name": "Sliding door lower roller guide/hinge",
            "slug": "sliding-door-lower-roller-guidehinge"
          },
          {
            "name": "Sliding door manual window regulator",
            "slug": "sliding-door-manual-window-regulator"
          },
          {
            "name": "Sliding door middle rail",
            "slug": "sliding-door-middle-rail"
          },
          {
            "name": "Sliding door middle roller runner",
            "slug": "sliding-door-middle-roller-runner"
          },
          {
            "name": "Sliding door motor",
            "slug": "sliding-door-motor"
          },
          {
            "name": "Sliding door motor assembly",
            "slug": "sliding-door-motor-assembly"
          },
          {
            "name": "Sliding door rail trim",
            "slug": "sliding-door-rail-trim"
          },
          {
            "name": "Sliding door rubber seal",
            "slug": "sliding-door-rubber-seal"
          },
          {
            "name": "Sliding door sensor",
            "slug": "sliding-door-sensor"
          },
          {
            "name": "Sliding door trim (molding)",
            "slug": "sliding-door-trim-molding"
          },
          {
            "name": "Sliding door upper roller guide/hinge",
            "slug": "sliding-door-upper-roller-guidehinge"
          },
          {
            "name": "Sliding door upper top rail",
            "slug": "sliding-door-upper-top-rail"
          },
          {
            "name": "Sliding door van guard window grilles",
            "slug": "sliding-door-van-guard-window-grilles"
          },
          {
            "name": "Sliding door wind deflector",
            "slug": "sliding-door-wind-deflector"
          },
          {
            "name": "Sliding door window regulator with motor",
            "slug": "sliding-door-window-regulator-with-motor"
          }
        ]
      }
    ]
  },
  {
    "name": "Engine",
    "slug": "engine",
    "color": "#000",
    "subcategories": [
      {
        "name": "Engine for parts",
        "slug": "engine-for-parts",
        "subcategories": [
          {
            "name": "Balance shaft",
            "slug": "balance-shaft"
          },
          {
            "name": "Camshaft",
            "slug": "camshaft"
          },
          {
            "name": "Camshaft holder",
            "slug": "camshaft-holder"
          },
          {
            "name": "Camshaft pulley/ VANOS",
            "slug": "camshaft-pulley-vanos"
          },
          {
            "name": "Connecting rod/conrod",
            "slug": "connecting-rodconrod"
          },
          {
            "name": "Crankshaft",
            "slug": "crankshaft"
          },
          {
            "name": "Crankshaft gear",
            "slug": "crankshaft-gear"
          },
          {
            "name": "Crankshaft Holder",
            "slug": "crankshaft-holder"
          },
          {
            "name": "Crankshaft position gear",
            "slug": "crankshaft-position-gear"
          },
          {
            "name": "Cylinder head bolts",
            "slug": "cylinder-head-bolts"
          },
          {
            "name": "Engine block",
            "slug": "engine-block"
          },
          {
            "name": "Engine head",
            "slug": "engine-head"
          },
          {
            "name": "Head Valve Retaining Insert/Retainer",
            "slug": "head-valve-retaining-insertretainer"
          },
          {
            "name": "Oil cooling pipe",
            "slug": "oil-cooling-pipe"
          },
          {
            "name": "Oil fill pipe",
            "slug": "oil-fill-pipe"
          },
          {
            "name": "Oil pump",
            "slug": "oil-pump"
          },
          {
            "name": "Oil pump balance shaft",
            "slug": "oil-pump-balance-shaft"
          },
          {
            "name": "Oil pump chain",
            "slug": "oil-pump-chain"
          },
          {
            "name": "Oil sump",
            "slug": "oil-sump"
          },
          {
            "name": "Oil sump strainer pipe",
            "slug": "oil-sump-strainer-pipe"
          },
          {
            "name": "Other cylinder head part",
            "slug": "other-cylinder-head-part"
          },
          {
            "name": "other engine part",
            "slug": "other-engine-part"
          },
          {
            "name": "Piston",
            "slug": "piston"
          },
          {
            "name": "Piston ring",
            "slug": "piston-ring"
          },
          {
            "name": "Piston with connecting rod",
            "slug": "piston-with-connecting-rod"
          },
          {
            "name": "Rocker cam cover",
            "slug": "rocker-cam-cover"
          },
          {
            "name": "Slide rail for timing chain",
            "slug": "slide-rail-for-timing-chain"
          },
          {
            "name": "Tappets lifter",
            "slug": "tappets-lifter"
          },
          {
            "name": "Timing belt",
            "slug": "timing-belt"
          },
          {
            "name": "Timing belt tensioner",
            "slug": "timing-belt-tensioner"
          },
          {
            "name": "Timing belt tensioner pulley",
            "slug": "timing-belt-tensioner-pulley"
          },
          {
            "name": "Timing chain (engine)",
            "slug": "timing-chain-engine"
          },
          {
            "name": "Timing chain cover",
            "slug": "timing-chain-cover"
          },
          {
            "name": "Timing chain sprocket",
            "slug": "timing-chain-sprocket"
          },
          {
            "name": "Valve",
            "slug": "valve"
          },
          {
            "name": "Valve rocker arm",
            "slug": "valve-rocker-arm"
          },
          {
            "name": "Valve spring",
            "slug": "valve-spring"
          }
        ]
      },
      {
        "name": "Engines and parts",
        "slug": "engines-and-parts",
        "subcategories": [
          {
            "name": "Air conditioning tensioner",
            "slug": "air-conditioning-tensioner"
          },
          {
            "name": "Belt protection",
            "slug": "belt-protection"
          },
          {
            "name": "Breather heating element",
            "slug": "breather-heating-element"
          },
          {
            "name": "Breather valve",
            "slug": "breather-valve"
          },
          {
            "name": "Breather/breather pipe/hose",
            "slug": "breatherbreather-pipehose"
          },
          {
            "name": "Camshaft position sensor",
            "slug": "camshaft-position-sensor"
          },
          {
            "name": "Camshaft speed sensor",
            "slug": "camshaft-speed-sensor"
          },
          {
            "name": "Camshaft vanos timing valve",
            "slug": "camshaft-vanos-timing-valve"
          },
          {
            "name": "Crankshaft position sensor",
            "slug": "crankshaft-position-sensor"
          },
          {
            "name": "Crankshaft pulley",
            "slug": "crankshaft-pulley"
          },
          {
            "name": "Crankshaft speed sensor",
            "slug": "crankshaft-speed-sensor"
          },
          {
            "name": "Detonation knock sensor",
            "slug": "detonation-knock-sensor"
          },
          {
            "name": "Electric car motor",
            "slug": "electric-car-motor"
          },
          {
            "name": "Engine",
            "slug": "engine"
          },
          {
            "name": "Engine cover (trim)",
            "slug": "engine-cover-trim"
          },
          {
            "name": "Engine mount bracket",
            "slug": "engine-mount-bracket"
          },
          {
            "name": "Engine mount vacuum valve",
            "slug": "engine-mount-vacuum-valve"
          },
          {
            "name": "Engine mounting bracket",
            "slug": "engine-mounting-bracket"
          },
          {
            "name": "Engine swap",
            "slug": "engine-swap"
          },
          {
            "name": "Heat shield in engine bay",
            "slug": "heat-shield-in-engine-bay"
          },
          {
            "name": "Oil breather separator",
            "slug": "oil-breather-separator"
          },
          {
            "name": "Oil filler cap",
            "slug": "oil-filler-cap"
          },
          {
            "name": "Oil filter cover",
            "slug": "oil-filter-cover"
          },
          {
            "name": "Oil filter mounting bracket",
            "slug": "oil-filter-mounting-bracket"
          },
          {
            "name": "Oil level dip stick",
            "slug": "oil-level-dip-stick"
          },
          {
            "name": "Oil level sensor",
            "slug": "oil-level-sensor"
          },
          {
            "name": "Other engine part",
            "slug": "other-engine-part"
          },
          {
            "name": "Timing belt guard (cover)",
            "slug": "timing-belt-guard-cover"
          },
          {
            "name": "Timing belt/chain tensioner",
            "slug": "timing-beltchain-tensioner"
          },
          {
            "name": "Vacuum pump",
            "slug": "vacuum-pump"
          },
          {
            "name": "Valve oil control",
            "slug": "valve-oil-control"
          }
        ]
      },
      {
        "name": "Generator/alternator and its parts",
        "slug": "generatoralternator-and-its-parts",
        "subcategories": [
          {
            "name": "Alternator belt",
            "slug": "alternator-belt"
          },
          {
            "name": "Alternator belt tensioner",
            "slug": "alternator-belt-tensioner"
          },
          {
            "name": "Alternator belt tensioner pulley",
            "slug": "alternator-belt-tensioner-pulley"
          },
          {
            "name": "Alternator pulley",
            "slug": "alternator-pulley"
          },
          {
            "name": "Belt tensioner pulley",
            "slug": "belt-tensioner-pulley"
          },
          {
            "name": "Generator/alternator",
            "slug": "generatoralternator"
          },
          {
            "name": "Generator/alternator belt tensioner",
            "slug": "generatoralternator-belt-tensioner"
          },
          {
            "name": "Generator/alternator bracket",
            "slug": "generatoralternator-bracket"
          },
          {
            "name": "Generator/alternator part",
            "slug": "generatoralternator-part"
          },
          {
            "name": "Wires (generator/alternator)",
            "slug": "wires-generatoralternator"
          }
        ]
      },
      {
        "name": "Starter motor and its parts",
        "slug": "starter-motor-and-its-parts",
        "subcategories": [
          {
            "name": "Starter motor",
            "slug": "starter-motor"
          },
          {
            "name": "Starter motor clutch/sleeve",
            "slug": "starter-motor-clutchsleeve"
          },
          {
            "name": "Starter motor parts",
            "slug": "starter-motor-parts"
          },
          {
            "name": "Starter motor/solenoid",
            "slug": "starter-motorsolenoid"
          },
          {
            "name": "Wires (starter motor)",
            "slug": "wires-starter-motor"
          }
        ]
      },
      {
        "name": "Turbocharger",
        "slug": "turbocharger",
        "subcategories": [
          {
            "name": "Coolant pipe/hose",
            "slug": "coolant-pipehose"
          },
          {
            "name": "Supercharger",
            "slug": "supercharger"
          },
          {
            "name": "Turbine electric control actuator",
            "slug": "turbine-electric-control-actuator"
          },
          {
            "name": "Turbo",
            "slug": "turbo"
          },
          {
            "name": "Turbo charger electric actuator",
            "slug": "turbo-charger-electric-actuator"
          },
          {
            "name": "Turbo solenoid valve",
            "slug": "turbo-solenoid-valve"
          },
          {
            "name": "Turbo system vacuum part",
            "slug": "turbo-system-vacuum-part"
          },
          {
            "name": "Turbo turbocharger oiling pipe/hose",
            "slug": "turbo-turbocharger-oiling-pipehose"
          }
        ]
      },
      {
        "name": "Vacuum system",
        "slug": "vacuum-system",
        "subcategories": [
          {
            "name": "Cruise control vacuum pump",
            "slug": "cruise-control-vacuum-pump"
          },
          {
            "name": "Tandem pump",
            "slug": "tandem-pump"
          },
          {
            "name": "Vacuum air tank",
            "slug": "vacuum-air-tank"
          },
          {
            "name": "Vacuum line/pipe/hose",
            "slug": "vacuum-linepipehose"
          },
          {
            "name": "Vacuum pump",
            "slug": "vacuum-pump"
          },
          {
            "name": "Vacuum valve",
            "slug": "vacuum-valve"
          },
          {
            "name": "Valve vacuum",
            "slug": "valve-vacuum"
          }
        ]
      }
    ]
  },
  {
    "name": "Exterior front body parts",
    "slug": "exterior-front-body-parts",
    "color": "#000",
    "subcategories": [
      {
        "name": "Engine bonnet/hood",
        "slug": "engine-bonnethood",
        "subcategories": [
          {
            "name": "Bonnet alarm switch sensor",
            "slug": "bonnet-alarm-switch-sensor"
          },
          {
            "name": "Bonnet Pedestrian Airbag Actuator",
            "slug": "bonnet-pedestrian-airbag-actuator"
          },
          {
            "name": "Bonnet wind deflector",
            "slug": "bonnet-wind-deflector"
          },
          {
            "name": "Bonnet/hood grill",
            "slug": "bonnethood-grill"
          },
          {
            "name": "Engine bonnet/hood",
            "slug": "engine-bonnethood"
          },
          {
            "name": "Engine bonnet/hood hinges",
            "slug": "engine-bonnethood-hinges"
          },
          {
            "name": "Engine bonnet/hood lock release cable",
            "slug": "engine-bonnethood-lock-release-cable"
          },
          {
            "name": "Engine bonnet/hood lock trim molding",
            "slug": "engine-bonnethood-lock-trim-molding"
          },
          {
            "name": "Engine bonnet/hood lock/catch",
            "slug": "engine-bonnethood-lockcatch"
          },
          {
            "name": "Engine bonnet/hood lock/latch loop/hook",
            "slug": "engine-bonnethood-locklatch-loophook"
          },
          {
            "name": "Engine bonnet/hood prop rod/strut",
            "slug": "engine-bonnethood-prop-rodstrut"
          },
          {
            "name": "Engine bonnet/hood sound/heat insulation",
            "slug": "engine-bonnethood-soundheat-insulation"
          },
          {
            "name": "Engine compartment bulkhead",
            "slug": "engine-compartment-bulkhead"
          },
          {
            "name": "Engine compartment rubber",
            "slug": "engine-compartment-rubber"
          },
          {
            "name": "Engine hood trim",
            "slug": "engine-hood-trim"
          },
          {
            "name": "Front bonnet/hood damper/strut",
            "slug": "front-bonnethood-damperstrut"
          },
          {
            "name": "Front grill",
            "slug": "front-grill"
          },
          {
            "name": "Hood Support Bracket (s)",
            "slug": "hood-support-bracket-s"
          },
          {
            "name": "Wiper trim",
            "slug": "wiper-trim"
          }
        ]
      },
      {
        "name": "Fenders",
        "slug": "fenders",
        "subcategories": [
          {
            "name": "Fender",
            "slug": "fender"
          },
          {
            "name": "Fender end trim",
            "slug": "fender-end-trim"
          },
          {
            "name": "Fender foam support/seal",
            "slug": "fender-foam-supportseal"
          },
          {
            "name": "Fender grill",
            "slug": "fender-grill"
          },
          {
            "name": "Fender model badge letters",
            "slug": "fender-model-badge-letters"
          },
          {
            "name": "Fender mounting bracket",
            "slug": "fender-mounting-bracket"
          },
          {
            "name": "Fender trim (molding)",
            "slug": "fender-trim-molding"
          },
          {
            "name": "Front arch trim",
            "slug": "front-arch-trim"
          },
          {
            "name": "Front splash guards bracket",
            "slug": "front-splash-guards-bracket"
          },
          {
            "name": "Front wheel arch liner splash guards",
            "slug": "front-wheel-arch-liner-splash-guards"
          }
        ]
      },
      {
        "name": "Front bumper",
        "slug": "front-bumper",
        "subcategories": [
          {
            "name": "ACC Distronic radar sensor grill/trim",
            "slug": "acc-distronic-radar-sensor-grilltrim"
          },
          {
            "name": "Brake cooling air channel/duct",
            "slug": "brake-cooling-air-channelduct"
          },
          {
            "name": "Fog light bracket",
            "slug": "fog-light-bracket"
          },
          {
            "name": "Front bumper",
            "slug": "front-bumper"
          },
          {
            "name": "Front bumper camera",
            "slug": "front-bumper-camera"
          },
          {
            "name": "Front bumper corner part panel trim",
            "slug": "front-bumper-corner-part-panel-trim"
          },
          {
            "name": "Front bumper cross member",
            "slug": "front-bumper-cross-member"
          },
          {
            "name": "Front bumper foam support bar",
            "slug": "front-bumper-foam-support-bar"
          },
          {
            "name": "Front bumper lip",
            "slug": "front-bumper-lip"
          },
          {
            "name": "Front bumper lower grill",
            "slug": "front-bumper-lower-grill"
          },
          {
            "name": "Front bumper mounting bracket",
            "slug": "front-bumper-mounting-bracket"
          },
          {
            "name": "Front bumper shock/impact absorber",
            "slug": "front-bumper-shockimpact-absorber"
          },
          {
            "name": "Front bumper splitter molding",
            "slug": "front-bumper-splitter-molding"
          },
          {
            "name": "Front bumper support beam",
            "slug": "front-bumper-support-beam"
          },
          {
            "name": "Front bumper turn signal",
            "slug": "front-bumper-turn-signal"
          },
          {
            "name": "Front bumper upper radiator grill",
            "slug": "front-bumper-upper-radiator-grill"
          },
          {
            "name": "Front fog light trim/grill",
            "slug": "front-fog-light-trimgrill"
          },
          {
            "name": "Front parking sensor holder (PDC)",
            "slug": "front-parking-sensor-holder-pdc"
          },
          {
            "name": "Front tow hook cap/cover",
            "slug": "front-tow-hook-capcover"
          },
          {
            "name": "Headlight washer spray nozzle cap/cover",
            "slug": "headlight-washer-spray-nozzle-capcover"
          },
          {
            "name": "Manufacturer badge logo/emblem",
            "slug": "manufacturer-badge-logoemblem"
          },
          {
            "name": "Number plate surrounds holder frame",
            "slug": "number-plate-surrounds-holder-frame"
          }
        ]
      },
      {
        "name": "Front kits",
        "slug": "front-kits",
        "subcategories": [
          {
            "name": "Bumpers kit",
            "slug": "bumpers-kit"
          },
          {
            "name": "Front piece kit",
            "slug": "front-piece-kit"
          }
        ]
      },
      {
        "name": "Radiator support slam panel",
        "slug": "radiator-support-slam-panel",
        "subcategories": [
          {
            "name": "Bottom radiator support slam panel",
            "slug": "bottom-radiator-support-slam-panel"
          },
          {
            "name": "Intercooler air guide/duct channel",
            "slug": "intercooler-air-guideduct-channel"
          },
          {
            "name": "Radiator active air flap actuator",
            "slug": "radiator-active-air-flap-actuator"
          },
          {
            "name": "Radiator support slam panel",
            "slug": "radiator-support-slam-panel"
          },
          {
            "name": "Radiator support slam panel bracket",
            "slug": "radiator-support-slam-panel-bracket"
          },
          {
            "name": "Radiator trim",
            "slug": "radiator-trim"
          },
          {
            "name": "Side radiator support slam panel",
            "slug": "side-radiator-support-slam-panel"
          },
          {
            "name": "Top upper radiator support slam panel",
            "slug": "top-upper-radiator-support-slam-panel"
          }
        ]
      },
      {
        "name": "Under body/under tray cover",
        "slug": "under-bodyunder-tray-cover",
        "subcategories": [
          {
            "name": "Auxiliary heater bottom cover protection",
            "slug": "auxiliary-heater-bottom-cover-protection"
          },
          {
            "name": "Center/middle under tray cover",
            "slug": "centermiddle-under-tray-cover"
          },
          {
            "name": "Engine splash shield/under tray",
            "slug": "engine-splash-shieldunder-tray"
          },
          {
            "name": "Front bumper skid plate/under tray",
            "slug": "front-bumper-skid-plateunder-tray"
          },
          {
            "name": "Front underbody cover/under tray",
            "slug": "front-underbody-coverunder-tray"
          },
          {
            "name": "Gearbox bottom protection",
            "slug": "gearbox-bottom-protection"
          },
          {
            "name": "Side bottom protection",
            "slug": "side-bottom-protection"
          }
        ]
      }
    ]
  },
  {
    "name": "Exterior rear body parts",
    "slug": "exterior-rear-body-parts",
    "color": "#000",
    "subcategories": [
      {
        "name": "Arch liner splash guards/under trays",
        "slug": "arch-liner-splash-guardsunder-trays",
        "subcategories": [
          {
            "name": "Rear arch fender liner splash guards",
            "slug": "rear-arch-fender-liner-splash-guards"
          },
          {
            "name": "Rear bumper underbody cover/under tray",
            "slug": "rear-bumper-underbody-coverunder-tray"
          },
          {
            "name": "Rear underbody cover/under tray",
            "slug": "rear-underbody-coverunder-tray"
          },
          {
            "name": "Trunk boot underbody cover/under tray",
            "slug": "trunk-boot-underbody-coverunder-tray"
          }
        ]
      },
      {
        "name": "Automatic tailgate/trunk/boot lid lift",
        "slug": "automatic-tailgatetrunkboot-lid-lift",
        "subcategories": [
          {
            "name": "Soft lock spindle drive",
            "slug": "soft-lock-spindle-drive"
          },
          {
            "name": "Tailgate hydraulic pump cover",
            "slug": "tailgate-hydraulic-pump-cover"
          },
          {
            "name": "Tailgate hydraulic pump motor",
            "slug": "tailgate-hydraulic-pump-motor"
          },
          {
            "name": "Tailgate hydraulic set",
            "slug": "tailgate-hydraulic-set"
          },
          {
            "name": "Tailgate/trunk/boot open switch",
            "slug": "tailgatetrunkboot-open-switch"
          }
        ]
      },
      {
        "name": "End kits",
        "slug": "end-kits",
        "subcategories": [
          {
            "name": "Set of end parts",
            "slug": "set-of-end-parts"
          }
        ]
      },
      {
        "name": "Rear bumper",
        "slug": "rear-bumper",
        "subcategories": [
          {
            "name": "Blind spot radar bracket",
            "slug": "blind-spot-radar-bracket"
          },
          {
            "name": "Bumper support mounting bracket corner",
            "slug": "bumper-support-mounting-bracket-corner"
          },
          {
            "name": "Muffler trim",
            "slug": "muffler-trim"
          },
          {
            "name": "Number Plate Surrounds Holder Frame",
            "slug": "number-plate-surrounds-holder-frame"
          },
          {
            "name": "Quarter panel pressure vent",
            "slug": "quarter-panel-pressure-vent"
          },
          {
            "name": "Rear bumper",
            "slug": "rear-bumper"
          },
          {
            "name": "Rear bumper camera",
            "slug": "rear-bumper-camera"
          },
          {
            "name": "Rear bumper corner part panel trim",
            "slug": "rear-bumper-corner-part-panel-trim"
          },
          {
            "name": "Rear bumper cross member",
            "slug": "rear-bumper-cross-member"
          },
          {
            "name": "Rear bumper foam support bar",
            "slug": "rear-bumper-foam-support-bar"
          },
          {
            "name": "Rear bumper lower part trim",
            "slug": "rear-bumper-lower-part-trim"
          },
          {
            "name": "Rear bumper mounting bracket",
            "slug": "rear-bumper-mounting-bracket"
          },
          {
            "name": "Rear bumper row hook cap/cover",
            "slug": "rear-bumper-row-hook-capcover"
          },
          {
            "name": "Rear bumper shock impact absorber/damper",
            "slug": "rear-bumper-shock-impact-absorberdamper"
          },
          {
            "name": "Rear bumper support beam",
            "slug": "rear-bumper-support-beam"
          },
          {
            "name": "Rear bumper trim bar molding",
            "slug": "rear-bumper-trim-bar-molding"
          },
          {
            "name": "Rear parking sensor holder (PDC)",
            "slug": "rear-parking-sensor-holder-pdc"
          },
          {
            "name": "Rear shock/impact absorber stay/bar",
            "slug": "rear-shockimpact-absorber-staybar"
          },
          {
            "name": "Rear Tail Bumper Turn Signal",
            "slug": "rear-tail-bumper-turn-signal"
          },
          {
            "name": "Tow hook cap/cover",
            "slug": "tow-hook-capcover"
          }
        ]
      },
      {
        "name": "Spare wheel mounting",
        "slug": "spare-wheel-mounting",
        "subcategories": [
          {
            "name": "Holder (bracket)",
            "slug": "holder-bracket"
          },
          {
            "name": "Spare wheel bolt",
            "slug": "spare-wheel-bolt"
          },
          {
            "name": "Spare wheel lifting winch",
            "slug": "spare-wheel-lifting-winch"
          },
          {
            "name": "Spare wheel mounting bracket",
            "slug": "spare-wheel-mounting-bracket"
          }
        ]
      },
      {
        "name": "Tailgate/trunk/boot lid",
        "slug": "tailgatetrunkboot-lid",
        "subcategories": [
          {
            "name": "Manufacturers badge/model letters",
            "slug": "manufacturers-badgemodel-letters"
          },
          {
            "name": "Rear glass lock/latch",
            "slug": "rear-glass-locklatch"
          },
          {
            "name": "Rear window strut damper",
            "slug": "rear-window-strut-damper"
          },
          {
            "name": "Rear window tailgate spoiler",
            "slug": "rear-window-tailgate-spoiler"
          },
          {
            "name": "Rear windscreen sun blind/shade",
            "slug": "rear-windscreen-sun-blindshade"
          },
          {
            "name": "Reversing camera",
            "slug": "reversing-camera"
          },
          {
            "name": "Rubber seal tailgate window/glass",
            "slug": "rubber-seal-tailgate-windowglass"
          },
          {
            "name": "Seal rubber (tailgate)",
            "slug": "seal-rubber-tailgate"
          },
          {
            "name": "Shock absorber/damper mounting bracket",
            "slug": "shock-absorberdamper-mounting-bracket"
          },
          {
            "name": "Tailgate boot lock/latch motor",
            "slug": "tailgate-boot-locklatch-motor"
          },
          {
            "name": "Tailgate exterior lock",
            "slug": "tailgate-exterior-lock"
          },
          {
            "name": "Tailgate glass/window release handle",
            "slug": "tailgate-glasswindow-release-handle"
          },
          {
            "name": "Tailgate handle with camera",
            "slug": "tailgate-handle-with-camera"
          },
          {
            "name": "Tailgate interior release/open handle",
            "slug": "tailgate-interior-releaseopen-handle"
          },
          {
            "name": "Tailgate strut",
            "slug": "tailgate-strut"
          },
          {
            "name": "Tailgate trim",
            "slug": "tailgate-trim"
          },
          {
            "name": "Tailgate window lock/catch/latch",
            "slug": "tailgate-window-lockcatchlatch"
          },
          {
            "name": "Tailgate/trunk spoiler",
            "slug": "tailgatetrunk-spoiler"
          },
          {
            "name": "Tailgate/trunk strut/damper",
            "slug": "tailgatetrunk-strutdamper"
          },
          {
            "name": "Tailgate/trunk/boot exterior handle",
            "slug": "tailgatetrunkboot-exterior-handle"
          },
          {
            "name": "Tailgate/trunk/boot hinge",
            "slug": "tailgatetrunkboot-hinge"
          },
          {
            "name": "Tailgate/trunk/boot lid",
            "slug": "tailgatetrunkboot-lid"
          },
          {
            "name": "Tailgate/trunk/boot lid buffer",
            "slug": "tailgatetrunkboot-lid-buffer"
          },
          {
            "name": "Tailgate/trunk/boot lift motor",
            "slug": "tailgatetrunkboot-lift-motor"
          },
          {
            "name": "Tailgate/trunk/boot lock/catch/latch",
            "slug": "tailgatetrunkboot-lockcatchlatch"
          },
          {
            "name": "Tailgate/trunk/boot lock/latch/bracket",
            "slug": "tailgatetrunkboot-locklatchbracket"
          },
          {
            "name": "Tailgate/trunk/boot tension spring",
            "slug": "tailgatetrunkboot-tension-spring"
          },
          {
            "name": "Trunk door license plate light bar",
            "slug": "trunk-door-license-plate-light-bar"
          },
          {
            "name": "Trunk lock loop",
            "slug": "trunk-lock-loop"
          },
          {
            "name": "Trunk rubber seal (body)",
            "slug": "trunk-rubber-seal-body"
          }
        ]
      },
      {
        "name": "Truck tailgate",
        "slug": "truck-tailgate",
        "subcategories": [
          {
            "name": "Tailgate check strap stopper",
            "slug": "tailgate-check-strap-stopper"
          },
          {
            "name": "Tailgate hinge",
            "slug": "tailgate-hinge"
          },
          {
            "name": "Tailgate lock latch",
            "slug": "tailgate-lock-latch"
          },
          {
            "name": "Tailgate lock loop/hook striker",
            "slug": "tailgate-lock-loophook-striker"
          },
          {
            "name": "Tailgate release/open handle",
            "slug": "tailgate-releaseopen-handle"
          },
          {
            "name": "Tailgate trim",
            "slug": "tailgate-trim"
          },
          {
            "name": "Truck tailgate",
            "slug": "truck-tailgate"
          }
        ]
      }
    ]
  },
  {
    "name": "Front axle",
    "slug": "front-axle",
    "color": "#000",
    "subcategories": [
      {
        "name": "Driving mechanism",
        "slug": "driving-mechanism",
        "subcategories": [
          {
            "name": "Electric power steering pump",
            "slug": "electric-power-steering-pump"
          },
          {
            "name": "Hydraulic servotronic pressure valve",
            "slug": "hydraulic-servotronic-pressure-valve"
          },
          {
            "name": "Power steering belt tensioner",
            "slug": "power-steering-belt-tensioner"
          },
          {
            "name": "Power steering fluid tank/reservoir",
            "slug": "power-steering-fluid-tankreservoir"
          },
          {
            "name": "Power steering hose/pipe/line",
            "slug": "power-steering-hosepipeline"
          },
          {
            "name": "Power steering pump",
            "slug": "power-steering-pump"
          },
          {
            "name": "Power steering pump belt",
            "slug": "power-steering-pump-belt"
          },
          {
            "name": "Power steering pump mounting bracket",
            "slug": "power-steering-pump-mounting-bracket"
          },
          {
            "name": "Power steering pump pulley",
            "slug": "power-steering-pump-pulley"
          },
          {
            "name": "Power steering tank cap",
            "slug": "power-steering-tank-cap"
          },
          {
            "name": "Steering column damper",
            "slug": "steering-column-damper"
          },
          {
            "name": "Steering column universal joint",
            "slug": "steering-column-universal-joint"
          },
          {
            "name": "Steering rack",
            "slug": "steering-rack"
          },
          {
            "name": "Steering rack electric part",
            "slug": "steering-rack-electric-part"
          },
          {
            "name": "Steering rack mechanical part",
            "slug": "steering-rack-mechanical-part"
          },
          {
            "name": "Steering rack mounting bracket",
            "slug": "steering-rack-mounting-bracket"
          },
          {
            "name": "Steering tie rod",
            "slug": "steering-tie-rod"
          },
          {
            "name": "Steering tie rod boot",
            "slug": "steering-tie-rod-boot"
          },
          {
            "name": "Steering tie rod end",
            "slug": "steering-tie-rod-end"
          },
          {
            "name": "Steering wheel axle",
            "slug": "steering-wheel-axle"
          },
          {
            "name": "Steering wheel axle set",
            "slug": "steering-wheel-axle-set"
          }
        ]
      },
      {
        "name": "Front air suspension control",
        "slug": "front-air-suspension-control",
        "subcategories": [
          {
            "name": "Air suspension bag",
            "slug": "air-suspension-bag"
          },
          {
            "name": "Air suspension compressor",
            "slug": "air-suspension-compressor"
          },
          {
            "name": "Air suspension front height level sensor",
            "slug": "air-suspension-front-height-level-sensor"
          },
          {
            "name": "Air suspension front shock absorber",
            "slug": "air-suspension-front-shock-absorber"
          },
          {
            "name": "Air suspension line/pipe/hose",
            "slug": "air-suspension-linepipehose"
          },
          {
            "name": "Air suspension valve block",
            "slug": "air-suspension-valve-block"
          },
          {
            "name": "Front air suspension height level sensor",
            "slug": "front-air-suspension-height-level-sensor"
          },
          {
            "name": "Front air suspension shock absorber",
            "slug": "front-air-suspension-shock-absorber"
          },
          {
            "name": "Front shock absorber actuator solenoid",
            "slug": "front-shock-absorber-actuator-solenoid"
          }
        ]
      },
      {
        "name": "Front axle",
        "slug": "front-axle",
        "subcategories": [
          {
            "name": "Acceleration sensor",
            "slug": "acceleration-sensor"
          },
          {
            "name": "Active stabilizer",
            "slug": "active-stabilizer"
          },
          {
            "name": "Active stabilizer control/valve assembly",
            "slug": "active-stabilizer-controlvalve-assembly"
          },
          {
            "name": "Active stabilizer control/Valve assembly holder",
            "slug": "active-stabilizer-controlvalve-assembly-holder"
          },
          {
            "name": "Active stabilizer tube/hose",
            "slug": "active-stabilizer-tubehose"
          },
          {
            "name": "Coil spring mount",
            "slug": "coil-spring-mount"
          },
          {
            "name": "Front anti-roll bar/stabilizer link",
            "slug": "front-anti-roll-barstabilizer-link"
          },
          {
            "name": "Front anti-roll bar/sway bar",
            "slug": "front-anti-roll-barsway-bar"
          },
          {
            "name": "Front ball joint",
            "slug": "front-ball-joint"
          },
          {
            "name": "Front coil spring",
            "slug": "front-coil-spring"
          },
          {
            "name": "Front coil spring rubber mount",
            "slug": "front-coil-spring-rubber-mount"
          },
          {
            "name": "Front control arm",
            "slug": "front-control-arm"
          },
          {
            "name": "Front height sensor lever",
            "slug": "front-height-sensor-lever"
          },
          {
            "name": "Front leaf spring",
            "slug": "front-leaf-spring"
          },
          {
            "name": "Front lower control arm/wishbone",
            "slug": "front-lower-control-armwishbone"
          },
          {
            "name": "Front shock absorber damper bump stop",
            "slug": "front-shock-absorber-damper-bump-stop"
          },
          {
            "name": "Front shock absorber dust cover boot",
            "slug": "front-shock-absorber-dust-cover-boot"
          },
          {
            "name": "Front shock absorber with coil spring",
            "slug": "front-shock-absorber-with-coil-spring"
          },
          {
            "name": "Front shock absorber/damper",
            "slug": "front-shock-absorberdamper"
          },
          {
            "name": "Front strut bar",
            "slug": "front-strut-bar"
          },
          {
            "name": "Front subframe",
            "slug": "front-subframe"
          },
          {
            "name": "Front suspension assembly kit set",
            "slug": "front-suspension-assembly-kit-set"
          },
          {
            "name": "Front suspension camber bolt",
            "slug": "front-suspension-camber-bolt"
          },
          {
            "name": "Front upper control arm/wishbone",
            "slug": "front-upper-control-armwishbone"
          },
          {
            "name": "Front upper strut mount",
            "slug": "front-upper-strut-mount"
          },
          {
            "name": "Front wheel ball bearing",
            "slug": "front-wheel-ball-bearing"
          },
          {
            "name": "Front wheel bearing hub",
            "slug": "front-wheel-bearing-hub"
          },
          {
            "name": "Front wheel hub",
            "slug": "front-wheel-hub"
          },
          {
            "name": "Front wheel hub spindle knuckle",
            "slug": "front-wheel-hub-spindle-knuckle"
          },
          {
            "name": "Front wishbone bush",
            "slug": "front-wishbone-bush"
          },
          {
            "name": "Headlight/headlamp level sensor",
            "slug": "headlightheadlamp-level-sensor"
          },
          {
            "name": "Hub lock",
            "slug": "hub-lock"
          },
          {
            "name": "Kingpin",
            "slug": "kingpin"
          },
          {
            "name": "Lower shock absorber bracket",
            "slug": "lower-shock-absorber-bracket"
          },
          {
            "name": "Other front suspension part",
            "slug": "other-front-suspension-part"
          },
          {
            "name": "Set of springs and shock absorbers (Front and rear)",
            "slug": "set-of-springs-and-shock-absorbers-front-and-rear"
          },
          {
            "name": "Sway bar bush bracket, front",
            "slug": "sway-bar-bush-bracket-front"
          },
          {
            "name": "Throttle position sensor",
            "slug": "throttle-position-sensor"
          }
        ]
      }
    ]
  },
  {
    "name": "Fuel mixture system",
    "slug": "fuel-mixture-system",
    "color": "#000",
    "subcategories": [
      {
        "name": "Carburettor/mono injection",
        "slug": "carburettormono-injection",
        "subcategories": [
          {
            "name": "Carburettor",
            "slug": "carburettor"
          },
          {
            "name": "Carburettor/Mono Injection Pad",
            "slug": "carburettormono-injection-pad"
          },
          {
            "name": "MONO injection",
            "slug": "mono-injection"
          },
          {
            "name": "Other carburetor part",
            "slug": "other-carburetor-part"
          }
        ]
      },
      {
        "name": "Fuel injection system",
        "slug": "fuel-injection-system",
        "subcategories": [
          {
            "name": "Electromagnetic valve",
            "slug": "electromagnetic-valve"
          },
          {
            "name": "Fuel distributor",
            "slug": "fuel-distributor"
          },
          {
            "name": "Fuel injection (other)",
            "slug": "fuel-injection-other"
          },
          {
            "name": "Fuel injection high pressure pump",
            "slug": "fuel-injection-high-pressure-pump"
          },
          {
            "name": "Fuel injection system set",
            "slug": "fuel-injection-system-set"
          },
          {
            "name": "Fuel injector",
            "slug": "fuel-injector"
          },
          {
            "name": "Fuel Injector clamp holder",
            "slug": "fuel-injector-clamp-holder"
          },
          {
            "name": "Fuel injector supply line/pipe",
            "slug": "fuel-injector-supply-linepipe"
          },
          {
            "name": "Fuel injectors set",
            "slug": "fuel-injectors-set"
          },
          {
            "name": "Fuel main line pipe",
            "slug": "fuel-main-line-pipe"
          },
          {
            "name": "Fuel pressure regulator",
            "slug": "fuel-pressure-regulator"
          },
          {
            "name": "Fuel pressure sensor",
            "slug": "fuel-pressure-sensor"
          },
          {
            "name": "Fuel pump bracket",
            "slug": "fuel-pump-bracket"
          },
          {
            "name": "Fuel pump gear (pulley)",
            "slug": "fuel-pump-gear-pulley"
          },
          {
            "name": "Fuel return line/hose",
            "slug": "fuel-return-linehose"
          },
          {
            "name": "Fuel temperature sensor",
            "slug": "fuel-temperature-sensor"
          }
        ]
      },
      {
        "name": "Fuel mixture ignition system",
        "slug": "fuel-mixture-ignition-system",
        "subcategories": [
          {
            "name": "Glow plug",
            "slug": "glow-plug"
          },
          {
            "name": "High voltage ignition coil",
            "slug": "high-voltage-ignition-coil"
          },
          {
            "name": "Ignition amplifier control unit",
            "slug": "ignition-amplifier-control-unit"
          },
          {
            "name": "Ignition distributor",
            "slug": "ignition-distributor"
          },
          {
            "name": "Ignition plug leads",
            "slug": "ignition-plug-leads"
          },
          {
            "name": "Spark distributor",
            "slug": "spark-distributor"
          },
          {
            "name": "Spark distributor cap",
            "slug": "spark-distributor-cap"
          },
          {
            "name": "Spark plug",
            "slug": "spark-plug"
          }
        ]
      },
      {
        "name": "Fuel tank/filling/supply",
        "slug": "fuel-tankfillingsupply",
        "subcategories": [
          {
            "name": "Active carbon filter fuel vapour canister",
            "slug": "active-carbon-filter-fuel-vapour-canister"
          },
          {
            "name": "Fuel cap flap release cable",
            "slug": "fuel-cap-flap-release-cable"
          },
          {
            "name": "Fuel cap release pull handle",
            "slug": "fuel-cap-release-pull-handle"
          },
          {
            "name": "Fuel expansion tank",
            "slug": "fuel-expansion-tank"
          },
          {
            "name": "Fuel filter",
            "slug": "fuel-filter"
          },
          {
            "name": "Fuel filter bracket/mount holder",
            "slug": "fuel-filter-bracketmount-holder"
          },
          {
            "name": "Fuel filter heater",
            "slug": "fuel-filter-heater"
          },
          {
            "name": "Fuel filter housing",
            "slug": "fuel-filter-housing"
          },
          {
            "name": "Fuel heater",
            "slug": "fuel-heater"
          },
          {
            "name": "Fuel level sensor",
            "slug": "fuel-level-sensor"
          },
          {
            "name": "Fuel line pipe",
            "slug": "fuel-line-pipe"
          },
          {
            "name": "Fuel line/pipe/hose",
            "slug": "fuel-linepipehose"
          },
          {
            "name": "Fuel tank",
            "slug": "fuel-tank"
          },
          {
            "name": "Fuel tank bottom protection",
            "slug": "fuel-tank-bottom-protection"
          },
          {
            "name": "Fuel tank cap",
            "slug": "fuel-tank-cap"
          },
          {
            "name": "Fuel tank cap lock",
            "slug": "fuel-tank-cap-lock"
          },
          {
            "name": "Fuel tank cap lock motor",
            "slug": "fuel-tank-cap-lock-motor"
          },
          {
            "name": "Fuel tank cap trim",
            "slug": "fuel-tank-cap-trim"
          },
          {
            "name": "Fuel tank filler cap",
            "slug": "fuel-tank-filler-cap"
          },
          {
            "name": "Fuel tank filler neck pipe",
            "slug": "fuel-tank-filler-neck-pipe"
          },
          {
            "name": "Fuel tank mounting bracket",
            "slug": "fuel-tank-mounting-bracket"
          },
          {
            "name": "Fuel tank valve",
            "slug": "fuel-tank-valve"
          },
          {
            "name": "In tank fuel pump screw locking ring/nut",
            "slug": "in-tank-fuel-pump-screw-locking-ringnut"
          },
          {
            "name": "In-tank fuel pump",
            "slug": "in-tank-fuel-pump"
          },
          {
            "name": "Mechanical fuel pump",
            "slug": "mechanical-fuel-pump"
          },
          {
            "name": "Webasto auxiliary heater fuel line/pipe",
            "slug": "webasto-auxiliary-heater-fuel-linepipe"
          },
          {
            "name": "Webasto auxiliary heater fuel pump",
            "slug": "webasto-auxiliary-heater-fuel-pump"
          }
        ]
      },
      {
        "name": "LP gas equipment",
        "slug": "lp-gas-equipment",
        "subcategories": [
          {
            "name": "Gas equipment kit without a tank",
            "slug": "gas-equipment-kit-without-a-tank"
          },
          {
            "name": "LP gas electromagnetic valve solenoid",
            "slug": "lp-gas-electromagnetic-valve-solenoid"
          },
          {
            "name": "LP gas equipment set",
            "slug": "lp-gas-equipment-set"
          },
          {
            "name": "LP gas filter",
            "slug": "lp-gas-filter"
          },
          {
            "name": "LP gas injector",
            "slug": "lp-gas-injector"
          },
          {
            "name": "LP gas injectors rail housing",
            "slug": "lp-gas-injectors-rail-housing"
          },
          {
            "name": "LP gas injectors set",
            "slug": "lp-gas-injectors-set"
          },
          {
            "name": "LP gas line/pipe/hose",
            "slug": "lp-gas-linepipehose"
          },
          {
            "name": "LP gas reducer",
            "slug": "lp-gas-reducer"
          },
          {
            "name": "LP gas reducer temperature sensor",
            "slug": "lp-gas-reducer-temperature-sensor"
          },
          {
            "name": "LP gas tank",
            "slug": "lp-gas-tank"
          },
          {
            "name": "LP gas tank multivalve",
            "slug": "lp-gas-tank-multivalve"
          }
        ]
      },
      {
        "name": "Mono injection air supply system",
        "slug": "mono-injection-air-supply-system",
        "subcategories": [
          {
            "name": "Air filter",
            "slug": "air-filter"
          },
          {
            "name": "Air filter box",
            "slug": "air-filter-box"
          },
          {
            "name": "Air filter box cover",
            "slug": "air-filter-box-cover"
          },
          {
            "name": "Air filter cleaner box bracket assembly",
            "slug": "air-filter-cleaner-box-bracket-assembly"
          },
          {
            "name": "Air intake duct part",
            "slug": "air-intake-duct-part"
          },
          {
            "name": "Air intake hose/pipe",
            "slug": "air-intake-hosepipe"
          },
          {
            "name": "Air pressure sensor",
            "slug": "air-pressure-sensor"
          },
          {
            "name": "Air quality sensor",
            "slug": "air-quality-sensor"
          },
          {
            "name": "Breather hose/pipe",
            "slug": "breather-hosepipe"
          },
          {
            "name": "Electric throttle body valve",
            "slug": "electric-throttle-body-valve"
          },
          {
            "name": "Engine shut-off valve",
            "slug": "engine-shut-off-valve"
          },
          {
            "name": "Idle control valve (regulator)",
            "slug": "idle-control-valve-regulator"
          },
          {
            "name": "Intake air temperature sensor",
            "slug": "intake-air-temperature-sensor"
          },
          {
            "name": "Intake manifold",
            "slug": "intake-manifold"
          },
          {
            "name": "Intake manifold valve actuator/motor",
            "slug": "intake-manifold-valve-actuatormotor"
          },
          {
            "name": "Intake resonator",
            "slug": "intake-resonator"
          },
          {
            "name": "Intercooler hose/pipe",
            "slug": "intercooler-hosepipe"
          },
          {
            "name": "Intercooler pipe mounting bracket",
            "slug": "intercooler-pipe-mounting-bracket"
          },
          {
            "name": "Mass air flow meter",
            "slug": "mass-air-flow-meter"
          },
          {
            "name": "Throttle body valve",
            "slug": "throttle-body-valve"
          },
          {
            "name": "Throttle valve",
            "slug": "throttle-valve"
          },
          {
            "name": "Throttle valve position sensor",
            "slug": "throttle-valve-position-sensor"
          },
          {
            "name": "Turbo air intake inlet pipe/hose",
            "slug": "turbo-air-intake-inlet-pipehose"
          },
          {
            "name": "Vacuum valve",
            "slug": "vacuum-valve"
          }
        ]
      }
    ]
  },
  {
    "name": "Gas exhaust system",
    "slug": "gas-exhaust-system",
    "color": "#000",
    "subcategories": [
      {
        "name": "Exhaust gas control system",
        "slug": "exhaust-gas-control-system",
        "subcategories": [
          {
            "name": "Adblue control unit",
            "slug": "adblue-control-unit"
          },
          {
            "name": "Adblue fluid level sensor",
            "slug": "adblue-fluid-level-sensor"
          },
          {
            "name": "AdBlue injector",
            "slug": "adblue-injector"
          },
          {
            "name": "AdBlue Liquid refill tube",
            "slug": "adblue-liquid-refill-tube"
          },
          {
            "name": "AdBlue liquid reservoir",
            "slug": "adblue-liquid-reservoir"
          },
          {
            "name": "AdBlue Liquid tank holder",
            "slug": "adblue-liquid-tank-holder"
          },
          {
            "name": "Adblue pump",
            "slug": "adblue-pump"
          },
          {
            "name": "AdBlue supply pipe",
            "slug": "adblue-supply-pipe"
          },
          {
            "name": "Adblue tank cap",
            "slug": "adblue-tank-cap"
          },
          {
            "name": "Catalyst/FAP/DPF particulate filter",
            "slug": "catalystfapdpf-particulate-filter"
          },
          {
            "name": "EGR thermostat",
            "slug": "egr-thermostat"
          },
          {
            "name": "EGR valve",
            "slug": "egr-valve"
          },
          {
            "name": "EGR valve cooler",
            "slug": "egr-valve-cooler"
          },
          {
            "name": "EGR valve cooler bracket",
            "slug": "egr-valve-cooler-bracket"
          },
          {
            "name": "EGR valve line/pipe/hose",
            "slug": "egr-valve-linepipehose"
          },
          {
            "name": "Exhaust gas pressure sensor",
            "slug": "exhaust-gas-pressure-sensor"
          },
          {
            "name": "Exhaust gas temperature sensor",
            "slug": "exhaust-gas-temperature-sensor"
          },
          {
            "name": "FAP fluid level sensor",
            "slug": "fap-fluid-level-sensor"
          },
          {
            "name": "FAP fluid pump control unit",
            "slug": "fap-fluid-pump-control-unit"
          },
          {
            "name": "FAP fluid supply tube",
            "slug": "fap-fluid-supply-tube"
          },
          {
            "name": "FAP fluid tank",
            "slug": "fap-fluid-tank"
          },
          {
            "name": "FAP fluid tank holder",
            "slug": "fap-fluid-tank-holder"
          },
          {
            "name": "FAP injector",
            "slug": "fap-injector"
          },
          {
            "name": "FAP liquid filling pipe",
            "slug": "fap-liquid-filling-pipe"
          },
          {
            "name": "FAP pump",
            "slug": "fap-pump"
          },
          {
            "name": "Lambda probe sensor",
            "slug": "lambda-probe-sensor"
          },
          {
            "name": "Other AdBlue system parts",
            "slug": "other-adblue-system-parts"
          },
          {
            "name": "Secondary air pump",
            "slug": "secondary-air-pump"
          },
          {
            "name": "Secondary air pump holder",
            "slug": "secondary-air-pump-holder"
          }
        ]
      },
      {
        "name": "Gas exhaust system",
        "slug": "gas-exhaust-system",
        "subcategories": [
          {
            "name": "Double Muffler",
            "slug": "double-muffler"
          },
          {
            "name": "Exhaust flexible connection",
            "slug": "exhaust-flexible-connection"
          },
          {
            "name": "Exhaust gas pipe",
            "slug": "exhaust-gas-pipe"
          },
          {
            "name": "Exhaust heat shield",
            "slug": "exhaust-heat-shield"
          },
          {
            "name": "Exhaust manifold",
            "slug": "exhaust-manifold"
          },
          {
            "name": "Front muffler/silencer",
            "slug": "front-mufflersilencer"
          },
          {
            "name": "Middle muffler/silencer",
            "slug": "middle-mufflersilencer"
          },
          {
            "name": "Muffler ending",
            "slug": "muffler-ending"
          },
          {
            "name": "Muffler mount bracket/holder",
            "slug": "muffler-mount-bracketholder"
          },
          {
            "name": "Muffler pipe connector clamp",
            "slug": "muffler-pipe-connector-clamp"
          },
          {
            "name": "Muffler/silencer",
            "slug": "mufflersilencer"
          },
          {
            "name": "Other exhaust manifold parts",
            "slug": "other-exhaust-manifold-parts"
          },
          {
            "name": "Rear muffler/silencer tail pipe",
            "slug": "rear-mufflersilencer-tail-pipe"
          }
        ]
      }
    ]
  },
  {
    "name": "Gearbox/clutch/transmission",
    "slug": "gearboxclutchtransmission",
    "color": "#000",
    "subcategories": [
      {
        "name": "Clutch",
        "slug": "clutch",
        "subcategories": [
          {
            "name": "Clutch cable",
            "slug": "clutch-cable"
          },
          {
            "name": "Clutch fluid level sensor",
            "slug": "clutch-fluid-level-sensor"
          },
          {
            "name": "Clutch fluid reservoir/tank",
            "slug": "clutch-fluid-reservoirtank"
          },
          {
            "name": "Clutch master cylinder",
            "slug": "clutch-master-cylinder"
          },
          {
            "name": "Clutch pipe/line",
            "slug": "clutch-pipeline"
          },
          {
            "name": "Clutch pressure plate",
            "slug": "clutch-pressure-plate"
          },
          {
            "name": "Clutch release arm fork",
            "slug": "clutch-release-arm-fork"
          },
          {
            "name": "clutch release bearing",
            "slug": "clutch-release-bearing"
          },
          {
            "name": "Clutch release bearing slave cylinder",
            "slug": "clutch-release-bearing-slave-cylinder"
          },
          {
            "name": "Clutch set kit",
            "slug": "clutch-set-kit"
          },
          {
            "name": "Clutch slave cylinder",
            "slug": "clutch-slave-cylinder"
          },
          {
            "name": "Dual mass flywheel",
            "slug": "dual-mass-flywheel"
          },
          {
            "name": "Flywheel",
            "slug": "flywheel"
          },
          {
            "name": "Flywheel bolts",
            "slug": "flywheel-bolts"
          },
          {
            "name": "Pressure plate",
            "slug": "pressure-plate"
          },
          {
            "name": "Slave cylinder release bearing",
            "slug": "slave-cylinder-release-bearing"
          },
          {
            "name": "Torque converter",
            "slug": "torque-converter"
          }
        ]
      },
      {
        "name": "Differential/rear axle assembly",
        "slug": "differentialrear-axle-assembly",
        "subcategories": [
          {
            "name": "Front axle beam",
            "slug": "front-axle-beam"
          },
          {
            "name": "Front differential",
            "slug": "front-differential"
          },
          {
            "name": "Front differential bracket",
            "slug": "front-differential-bracket"
          },
          {
            "name": "Front differential mounting bracket",
            "slug": "front-differential-mounting-bracket"
          },
          {
            "name": "Front gearbox reducer motor",
            "slug": "front-gearbox-reducer-motor"
          },
          {
            "name": "Gearbox transfer box case",
            "slug": "gearbox-transfer-box-case"
          },
          {
            "name": "Gearbox-reducer motor",
            "slug": "gearbox-reducer-motor"
          },
          {
            "name": "Rear axle beam with reductor",
            "slug": "rear-axle-beam-with-reductor"
          },
          {
            "name": "Rear differential",
            "slug": "rear-differential"
          },
          {
            "name": "Rear differential mounting bracket",
            "slug": "rear-differential-mounting-bracket"
          },
          {
            "name": "Rear differential/diff mount bracket",
            "slug": "rear-differentialdiff-mount-bracket"
          },
          {
            "name": "Rear gearbox reducer motor",
            "slug": "rear-gearbox-reducer-motor"
          },
          {
            "name": "Rear gearbox reducer/haldex oil pump",
            "slug": "rear-gearbox-reducerhaldex-oil-pump"
          }
        ]
      },
      {
        "name": "Drive shafts",
        "slug": "drive-shafts",
        "subcategories": [
          {
            "name": "Drive shaft (set)",
            "slug": "drive-shaft-set"
          },
          {
            "name": "Driveshaft inner CV joint",
            "slug": "driveshaft-inner-cv-joint"
          },
          {
            "name": "Driveshaft inner CV joint boot",
            "slug": "driveshaft-inner-cv-joint-boot"
          },
          {
            "name": "Driveshaft outer CV joint",
            "slug": "driveshaft-outer-cv-joint"
          },
          {
            "name": "Driveshaft outer CV joint boot",
            "slug": "driveshaft-outer-cv-joint-boot"
          },
          {
            "name": "Driveshaft support bearing",
            "slug": "driveshaft-support-bearing"
          },
          {
            "name": "Driveshaft support bearing bracket",
            "slug": "driveshaft-support-bearing-bracket"
          },
          {
            "name": "Front driveshaft",
            "slug": "front-driveshaft"
          },
          {
            "name": "Front prop shaft",
            "slug": "front-prop-shaft"
          },
          {
            "name": "Half shaft coupling",
            "slug": "half-shaft-coupling"
          },
          {
            "name": "Middle center prop shaft",
            "slug": "middle-center-prop-shaft"
          },
          {
            "name": "Prop shaft support center bearing",
            "slug": "prop-shaft-support-center-bearing"
          },
          {
            "name": "Prop shaft universal joint",
            "slug": "prop-shaft-universal-joint"
          },
          {
            "name": "Rear driveshaft",
            "slug": "rear-driveshaft"
          },
          {
            "name": "Rear driveshaft/prop shaft",
            "slug": "rear-driveshaftprop-shaft"
          },
          {
            "name": "Rear prop shaft donut coupling/joint",
            "slug": "rear-prop-shaft-donut-couplingjoint"
          }
        ]
      },
      {
        "name": "Gearbox for parts",
        "slug": "gearbox-for-parts",
        "subcategories": [
          {
            "name": "Fifth/5th gear pinion",
            "slug": "fifth5th-gear-pinion"
          },
          {
            "name": "Gear selector/shifter in gearbox",
            "slug": "gear-selectorshifter-in-gearbox"
          },
          {
            "name": "Gearbox sump",
            "slug": "gearbox-sump"
          },
          {
            "name": "Other gearbox part",
            "slug": "other-gearbox-part"
          },
          {
            "name": "Transmission gearbox valve body",
            "slug": "transmission-gearbox-valve-body"
          }
        ]
      },
      {
        "name": "Gearbox/gear shifting",
        "slug": "gearboxgear-shifting",
        "subcategories": [
          {
            "name": "Automatic gearbox",
            "slug": "automatic-gearbox"
          },
          {
            "name": "Electric car Transmission",
            "slug": "electric-car-transmission"
          },
          {
            "name": "Gear selector",
            "slug": "gear-selector"
          },
          {
            "name": "Gear shift cable bracket",
            "slug": "gear-shift-cable-bracket"
          },
          {
            "name": "Gear shift cable linkage",
            "slug": "gear-shift-cable-linkage"
          },
          {
            "name": "Gear shift rod",
            "slug": "gear-shift-rod"
          },
          {
            "name": "Gear shifter/selector",
            "slug": "gear-shifterselector"
          },
          {
            "name": "Gear shifter/selector",
            "slug": "gear-shifterselector"
          },
          {
            "name": "Gearbox gasket",
            "slug": "gearbox-gasket"
          },
          {
            "name": "Gearbox mount",
            "slug": "gearbox-mount"
          },
          {
            "name": "Gearbox mounting bracket",
            "slug": "gearbox-mounting-bracket"
          },
          {
            "name": "Gearbox retarder cable",
            "slug": "gearbox-retarder-cable"
          },
          {
            "name": "Gearbox retarder lever",
            "slug": "gearbox-retarder-lever"
          },
          {
            "name": "Gearbox retarder mechanism",
            "slug": "gearbox-retarder-mechanism"
          },
          {
            "name": "Manual 4 speed gearbox",
            "slug": "manual-4-speed-gearbox"
          },
          {
            "name": "Manual 5 speed gearbox",
            "slug": "manual-5-speed-gearbox"
          },
          {
            "name": "Manual 6 speed gearbox",
            "slug": "manual-6-speed-gearbox"
          },
          {
            "name": "Manual 7 speed gearbox",
            "slug": "manual-7-speed-gearbox"
          }
        ]
      }
    ]
  },
  {
    "name": "Glass",
    "slug": "glass",
    "color": "#000",
    "subcategories": [
      {
        "name": "Body glass/windows",
        "slug": "body-glasswindows",
        "subcategories": [
          {
            "name": "Front triangle window/glass",
            "slug": "front-triangle-windowglass"
          },
          {
            "name": "Rear side glass trim",
            "slug": "rear-side-glass-trim"
          },
          {
            "name": "Rear side window",
            "slug": "rear-side-window"
          },
          {
            "name": "Side middle window/glass",
            "slug": "side-middle-windowglass"
          },
          {
            "name": "Sunroof glass",
            "slug": "sunroof-glass"
          },
          {
            "name": "Vent window/glass motor",
            "slug": "vent-windowglass-motor"
          },
          {
            "name": "Vent/Glass mechanism",
            "slug": "ventglass-mechanism"
          }
        ]
      },
      {
        "name": "Front door window glass four-door",
        "slug": "front-door-window-glass-four-door",
        "subcategories": [
          {
            "name": "Front door vent window glass four-door",
            "slug": "front-door-vent-window-glass-four-door"
          },
          {
            "name": "Front door window glass four-door",
            "slug": "front-door-window-glass-four-door"
          }
        ]
      },
      {
        "name": "Front door window glass two-door",
        "slug": "front-door-window-glass-two-door",
        "subcategories": [
          {
            "name": "Front door window/glass (coupe)",
            "slug": "front-door-windowglass-coupe"
          },
          {
            "name": "Front vent window/glass (coupe)",
            "slug": "front-vent-windowglass-coupe"
          }
        ]
      },
      {
        "name": "Front/rear/tailgate",
        "slug": "frontreartailgate",
        "subcategories": [
          {
            "name": "Front windscreen/windshield window",
            "slug": "front-windscreenwindshield-window"
          },
          {
            "name": "Loading door trunk window/glass",
            "slug": "loading-door-trunk-windowglass"
          },
          {
            "name": "Opening tailgate glass",
            "slug": "opening-tailgate-glass"
          },
          {
            "name": "Rear windscreen/windshield window",
            "slug": "rear-windscreenwindshield-window"
          }
        ]
      },
      {
        "name": "Real door window glass",
        "slug": "real-door-window-glass",
        "subcategories": [
          {
            "name": "Rear door window glass",
            "slug": "rear-door-window-glass"
          },
          {
            "name": "Rear vent window glass",
            "slug": "rear-vent-window-glass"
          }
        ]
      },
      {
        "name": "Sliding door windows/glass",
        "slug": "sliding-door-windowsglass",
        "subcategories": [
          {
            "name": "Sliding door window/glass",
            "slug": "sliding-door-windowglass"
          }
        ]
      }
    ]
  },
  {
    "name": "Headlight/headlamp washing/cleaning system",
    "slug": "headlightheadlamp-washingcleaning-system",
    "color": "#000",
    "subcategories": [
      {
        "name": "Headlight/headlamp washing/cleaning system",
        "slug": "headlightheadlamp-washingcleaning-system",
        "subcategories": [
          {
            "name": "Headlight washer hose/pipe",
            "slug": "headlight-washer-hosepipe"
          },
          {
            "name": "Headlight washer nozzle holder",
            "slug": "headlight-washer-nozzle-holder"
          },
          {
            "name": "Headlight washer spray nozzle",
            "slug": "headlight-washer-spray-nozzle"
          },
          {
            "name": "Headlight wiper arm",
            "slug": "headlight-wiper-arm"
          },
          {
            "name": "Headlight wiper arm set",
            "slug": "headlight-wiper-arm-set"
          },
          {
            "name": "Headlight wiper blade",
            "slug": "headlight-wiper-blade"
          },
          {
            "name": "Headlight wiper blade set",
            "slug": "headlight-wiper-blade-set"
          },
          {
            "name": "Headlight wiper motor",
            "slug": "headlight-wiper-motor"
          },
          {
            "name": "Lamp washer fluid tank",
            "slug": "lamp-washer-fluid-tank"
          }
        ]
      },
      {
        "name": "Rear window washing/cleaning system",
        "slug": "rear-window-washingcleaning-system",
        "subcategories": [
          {
            "name": "Rear window washer fluid hose",
            "slug": "rear-window-washer-fluid-hose"
          },
          {
            "name": "Rear window washer spray nozzle",
            "slug": "rear-window-washer-spray-nozzle"
          },
          {
            "name": "Rear window wiper mechanism",
            "slug": "rear-window-wiper-mechanism"
          },
          {
            "name": "Rear window wiper motor",
            "slug": "rear-window-wiper-motor"
          },
          {
            "name": "Rear wiper blade",
            "slug": "rear-wiper-blade"
          },
          {
            "name": "Rear wiper blade arm",
            "slug": "rear-wiper-blade-arm"
          }
        ]
      },
      {
        "name": "Window and headlight washing/cleaning system",
        "slug": "window-and-headlight-washingcleaning-system",
        "subcategories": [
          {
            "name": "Headlight washer pump",
            "slug": "headlight-washer-pump"
          },
          {
            "name": "Window washer liquid tank fill tube",
            "slug": "window-washer-liquid-tank-fill-tube"
          },
          {
            "name": "Windscreen/windshield washer pump",
            "slug": "windscreenwindshield-washer-pump"
          },
          {
            "name": "Windshield washer fluid level sensor",
            "slug": "windshield-washer-fluid-level-sensor"
          },
          {
            "name": "Windshield washer fluid reservoir/tank",
            "slug": "windshield-washer-fluid-reservoirtank"
          }
        ]
      },
      {
        "name": "Windshield washing/cleaning system",
        "slug": "windshield-washingcleaning-system",
        "subcategories": [
          {
            "name": "Front wiper blade arm",
            "slug": "front-wiper-blade-arm"
          },
          {
            "name": "Front wiper linkage",
            "slug": "front-wiper-linkage"
          },
          {
            "name": "Front wiper linkage and motor",
            "slug": "front-wiper-linkage-and-motor"
          },
          {
            "name": "Windshield washer fluid hose",
            "slug": "windshield-washer-fluid-hose"
          },
          {
            "name": "Windshield washer spray nozzle",
            "slug": "windshield-washer-spray-nozzle"
          },
          {
            "name": "Windshield/front glass wiper blade",
            "slug": "windshieldfront-glass-wiper-blade"
          },
          {
            "name": "Wiper motor",
            "slug": "wiper-motor"
          }
        ]
      }
    ]
  },
  {
    "name": "Lighting system",
    "slug": "lighting-system",
    "color": "#000",
    "subcategories": [
      {
        "name": "Fog lights",
        "slug": "fog-lights",
        "subcategories": [
          {
            "name": "Fog light bulb",
            "slug": "fog-light-bulb"
          },
          {
            "name": "Fog light part",
            "slug": "fog-light-part"
          },
          {
            "name": "Fog light set",
            "slug": "fog-light-set"
          },
          {
            "name": "Front fog light",
            "slug": "front-fog-light"
          },
          {
            "name": "Non-factory (optional) fog light",
            "slug": "non-factory-optional-fog-light"
          },
          {
            "name": "Rear fog light",
            "slug": "rear-fog-light"
          }
        ]
      },
      {
        "name": "Headlight/headlamp",
        "slug": "headlightheadlamp",
        "subcategories": [
          {
            "name": "Front reflector",
            "slug": "front-reflector"
          },
          {
            "name": "Headlight ballast module Xenon",
            "slug": "headlight-ballast-module-xenon"
          },
          {
            "name": "Headlight lense",
            "slug": "headlight-lense"
          },
          {
            "name": "Headlight level adjustment motor",
            "slug": "headlight-level-adjustment-motor"
          },
          {
            "name": "Headlight part",
            "slug": "headlight-part"
          },
          {
            "name": "Headlight/headlamp",
            "slug": "headlightheadlamp"
          },
          {
            "name": "Headlight/headlamp bulb",
            "slug": "headlightheadlamp-bulb"
          },
          {
            "name": "Headlight/headlamp dust cover",
            "slug": "headlightheadlamp-dust-cover"
          },
          {
            "name": "Headlight/headlamp mounting bracket",
            "slug": "headlightheadlamp-mounting-bracket"
          },
          {
            "name": "Headlights/headlamps set",
            "slug": "headlightsheadlamps-set"
          },
          {
            "name": "LED ballast control module",
            "slug": "led-ballast-control-module"
          },
          {
            "name": "LED Daytime headlight",
            "slug": "led-daytime-headlight"
          },
          {
            "name": "Under headlight/headlamp trim",
            "slug": "under-headlightheadlamp-trim"
          },
          {
            "name": "Xenon bulb",
            "slug": "xenon-bulb"
          }
        ]
      },
      {
        "name": "Indicator light",
        "slug": "indicator-light",
        "subcategories": [
          {
            "name": "Front fender indicator light",
            "slug": "front-fender-indicator-light"
          },
          {
            "name": "Front indicator light",
            "slug": "front-indicator-light"
          },
          {
            "name": "Mirror indicator light",
            "slug": "mirror-indicator-light"
          }
        ]
      },
      {
        "name": "Interior cabin light",
        "slug": "interior-cabin-light",
        "subcategories": [
          {
            "name": "Boot/trunk interior light",
            "slug": "boottrunk-interior-light"
          },
          {
            "name": "Front door handle light (exterior)",
            "slug": "front-door-handle-light-exterior"
          },
          {
            "name": "Front door interior light",
            "slug": "front-door-interior-light"
          },
          {
            "name": "Front seat light",
            "slug": "front-seat-light"
          },
          {
            "name": "Glove box light",
            "slug": "glove-box-light"
          },
          {
            "name": "Other interior light",
            "slug": "other-interior-light"
          },
          {
            "name": "Rear door handle exterior light",
            "slug": "rear-door-handle-exterior-light"
          },
          {
            "name": "Rear door interior light",
            "slug": "rear-door-interior-light"
          },
          {
            "name": "Rear seat light",
            "slug": "rear-seat-light"
          },
          {
            "name": "Spotlight",
            "slug": "spotlight"
          }
        ]
      },
      {
        "name": "Rear/tail lights",
        "slug": "reartail-lights",
        "subcategories": [
          {
            "name": "Number plate light",
            "slug": "number-plate-light"
          },
          {
            "name": "Rear bumper light",
            "slug": "rear-bumper-light"
          },
          {
            "name": "Rear corner (parking) light",
            "slug": "rear-corner-parking-light"
          },
          {
            "name": "Rear tail light bulb",
            "slug": "rear-tail-light-bulb"
          },
          {
            "name": "Rear tail light reflector",
            "slug": "rear-tail-light-reflector"
          },
          {
            "name": "Rear/tail light trim molding",
            "slug": "reartail-light-trim-molding"
          },
          {
            "name": "Rear/tail lights",
            "slug": "reartail-lights"
          },
          {
            "name": "Rear/tail lights set",
            "slug": "reartail-lights-set"
          },
          {
            "name": "Reverse light",
            "slug": "reverse-light"
          },
          {
            "name": "Tail light bulb cover holder",
            "slug": "tail-light-bulb-cover-holder"
          },
          {
            "name": "Tail light lenses",
            "slug": "tail-light-lenses"
          },
          {
            "name": "Tail light part",
            "slug": "tail-light-part"
          },
          {
            "name": "Tailgate light lenses",
            "slug": "tailgate-light-lenses"
          },
          {
            "name": "Tailgate rear/tail lights",
            "slug": "tailgate-reartail-lights"
          },
          {
            "name": "Third/center stoplight",
            "slug": "thirdcenter-stoplight"
          }
        ]
      }
    ]
  },
  {
    "name": "Other parts",
    "slug": "other-parts",
    "color": "#000",
    "subcategories": [
      {
        "name": "Engine bay",
        "slug": "engine-bay",
        "subcategories": [
          {
            "name": "Other engine bay part",
            "slug": "other-engine-bay-part"
          }
        ]
      },
      {
        "name": "Exterior part",
        "slug": "exterior-part",
        "subcategories": [
          {
            "name": "Other exterior part",
            "slug": "other-exterior-part"
          }
        ]
      },
      {
        "name": "Interior part",
        "slug": "interior-part",
        "subcategories": [
          {
            "name": "Other interior part",
            "slug": "other-interior-part"
          }
        ]
      },
      {
        "name": "Under body part",
        "slug": "under-body-part",
        "subcategories": [
          {
            "name": "Other under body part",
            "slug": "other-under-body-part"
          }
        ]
      }
    ]
  },
  {
    "name": "Rear axle",
    "slug": "rear-axle",
    "color": "#000",
    "subcategories": [
      {
        "name": "Rear axel air suspension level control",
        "slug": "rear-axel-air-suspension-level-control",
        "subcategories": [
          {
            "name": "Air suspension compressor/pump",
            "slug": "air-suspension-compressorpump"
          },
          {
            "name": "Air suspension pipe/line (rear)",
            "slug": "air-suspension-pipeline-rear"
          },
          {
            "name": "Air suspension rear shock absorber",
            "slug": "air-suspension-rear-shock-absorber"
          },
          {
            "name": "Air suspension tank/reservoir",
            "slug": "air-suspension-tankreservoir"
          },
          {
            "name": "Air suspension valve block",
            "slug": "air-suspension-valve-block"
          },
          {
            "name": "Pneumatic air compressor holding bracket",
            "slug": "pneumatic-air-compressor-holding-bracket"
          },
          {
            "name": "Pneumatic air compressor intake pipe/hose",
            "slug": "pneumatic-air-compressor-intake-pipehose"
          },
          {
            "name": "Pneumatic compressor air filter",
            "slug": "pneumatic-compressor-air-filter"
          },
          {
            "name": "Rear air suspension bag/shock absorber",
            "slug": "rear-air-suspension-bagshock-absorber"
          },
          {
            "name": "Rear air suspension level height sensor",
            "slug": "rear-air-suspension-level-height-sensor"
          },
          {
            "name": "Rear shock absorber actuator solenoid",
            "slug": "rear-shock-absorber-actuator-solenoid"
          },
          {
            "name": "Rear suspension height sensor lever",
            "slug": "rear-suspension-height-sensor-lever"
          },
          {
            "name": "Shock absorber/damper/air suspension",
            "slug": "shock-absorberdamperair-suspension"
          }
        ]
      },
      {
        "name": "Rear axle",
        "slug": "rear-axle",
        "subcategories": [
          {
            "name": "Coil spring/strut mount",
            "slug": "coil-springstrut-mount"
          },
          {
            "name": "Front shock absorber mounting bracket",
            "slug": "front-shock-absorber-mounting-bracket"
          },
          {
            "name": "Headlight/headlamp level sensor",
            "slug": "headlightheadlamp-level-sensor"
          },
          {
            "name": "Other rear suspension part",
            "slug": "other-rear-suspension-part"
          },
          {
            "name": "Rear active stabilizer",
            "slug": "rear-active-stabilizer"
          },
          {
            "name": "Rear anti-roll bar/stabilizer link",
            "slug": "rear-anti-roll-barstabilizer-link"
          },
          {
            "name": "Rear anti-roll bar/sway bar",
            "slug": "rear-anti-roll-barsway-bar"
          },
          {
            "name": "Rear axle beam",
            "slug": "rear-axle-beam"
          },
          {
            "name": "Rear axle beam mounts housing",
            "slug": "rear-axle-beam-mounts-housing"
          },
          {
            "name": "Rear beam",
            "slug": "rear-beam"
          },
          {
            "name": "Rear coil spring",
            "slug": "rear-coil-spring"
          },
          {
            "name": "Rear coil spring rubber mount",
            "slug": "rear-coil-spring-rubber-mount"
          },
          {
            "name": "Rear control arm",
            "slug": "rear-control-arm"
          },
          {
            "name": "Rear height level sensor lever",
            "slug": "rear-height-level-sensor-lever"
          },
          {
            "name": "Rear leaf spring",
            "slug": "rear-leaf-spring"
          },
          {
            "name": "Rear shock absorber damper bump stop",
            "slug": "rear-shock-absorber-damper-bump-stop"
          },
          {
            "name": "Rear shock absorber with coil spring",
            "slug": "rear-shock-absorber-with-coil-spring"
          },
          {
            "name": "Rear shock absorber/damper",
            "slug": "rear-shock-absorberdamper"
          },
          {
            "name": "Rear steering column",
            "slug": "rear-steering-column"
          },
          {
            "name": "Rear strut bar",
            "slug": "rear-strut-bar"
          },
          {
            "name": "Rear strut damper dust cover boot",
            "slug": "rear-strut-damper-dust-cover-boot"
          },
          {
            "name": "Rear subframe",
            "slug": "rear-subframe"
          },
          {
            "name": "Rear suspension assembly kit set",
            "slug": "rear-suspension-assembly-kit-set"
          },
          {
            "name": "Rear suspension camber bolt",
            "slug": "rear-suspension-camber-bolt"
          },
          {
            "name": "Rear suspension control arm",
            "slug": "rear-suspension-control-arm"
          },
          {
            "name": "Rear traction arm rod",
            "slug": "rear-traction-arm-rod"
          },
          {
            "name": "Rear upper control arm/wishbone",
            "slug": "rear-upper-control-armwishbone"
          },
          {
            "name": "Rear wheel ball bearing",
            "slug": "rear-wheel-ball-bearing"
          },
          {
            "name": "Rear wheel bearing hub",
            "slug": "rear-wheel-bearing-hub"
          },
          {
            "name": "Rear wheel hub",
            "slug": "rear-wheel-hub"
          },
          {
            "name": "Rear wheel hub spindle/knuckle",
            "slug": "rear-wheel-hub-spindleknuckle"
          },
          {
            "name": "Stub axle",
            "slug": "stub-axle"
          },
          {
            "name": "Sway bar bush bracket, rear",
            "slug": "sway-bar-bush-bracket-rear"
          }
        ]
      }
    ]
  },
  {
    "name": "Wheels/tires/caps",
    "slug": "wheelstirescaps",
    "color": "#000",
    "subcategories": [
      {
        "name": "Alloy rim wheels",
        "slug": "alloy-rim-wheels",
        "subcategories": [
          {
            "name": "R 23 light alloy rim",
            "slug": "r-23-light-alloy-rim"
          },
          {
            "name": "R 24 light alloy rim",
            "slug": "r-24-light-alloy-rim"
          },
          {
            "name": "R12 alloy rim",
            "slug": "r12-alloy-rim"
          },
          {
            "name": "R13 alloy rim",
            "slug": "r13-alloy-rim"
          },
          {
            "name": "R14 alloy rim",
            "slug": "r14-alloy-rim"
          },
          {
            "name": "R15 alloy rim",
            "slug": "r15-alloy-rim"
          },
          {
            "name": "R16 alloy rim",
            "slug": "r16-alloy-rim"
          },
          {
            "name": "R17 alloy rim",
            "slug": "r17-alloy-rim"
          },
          {
            "name": "R18 alloy rim",
            "slug": "r18-alloy-rim"
          },
          {
            "name": "R19 alloy rim",
            "slug": "r19-alloy-rim"
          },
          {
            "name": "R20 alloy rim",
            "slug": "r20-alloy-rim"
          },
          {
            "name": "R21 alloy rim",
            "slug": "r21-alloy-rim"
          },
          {
            "name": "R22 alloy rim",
            "slug": "r22-alloy-rim"
          }
        ]
      },
      {
        "name": "C summer tires",
        "slug": "c-summer-tires",
        "subcategories": [
          {
            "name": "R12 C summer tire",
            "slug": "r12-c-summer-tire"
          },
          {
            "name": "R13 C summer tire",
            "slug": "r13-c-summer-tire"
          },
          {
            "name": "R14 C summer tire",
            "slug": "r14-c-summer-tire"
          },
          {
            "name": "R15 C summer tire",
            "slug": "r15-c-summer-tire"
          },
          {
            "name": "R16 C summer tire",
            "slug": "r16-c-summer-tire"
          },
          {
            "name": "R17 C summer tire",
            "slug": "r17-c-summer-tire"
          },
          {
            "name": "R18 C summer tire",
            "slug": "r18-c-summer-tire"
          }
        ]
      },
      {
        "name": "C winter tires",
        "slug": "c-winter-tires",
        "subcategories": [
          {
            "name": "R12 C winter tire",
            "slug": "r12-c-winter-tire"
          },
          {
            "name": "R13 C winter tire",
            "slug": "r13-c-winter-tire"
          },
          {
            "name": "R14 C winter tire",
            "slug": "r14-c-winter-tire"
          },
          {
            "name": "R15 C winter tire",
            "slug": "r15-c-winter-tire"
          },
          {
            "name": "R16 C winter tire",
            "slug": "r16-c-winter-tire"
          },
          {
            "name": "R17 C winter tire",
            "slug": "r17-c-winter-tire"
          },
          {
            "name": "R18 C winter tire",
            "slug": "r18-c-winter-tire"
          }
        ]
      },
      {
        "name": "Carbon fiber rims",
        "slug": "carbon-fiber-rims",
        "subcategories": [
          {
            "name": "R12 carbon fiber rim",
            "slug": "r12-carbon-fiber-rim"
          },
          {
            "name": "R13 carbon fiber rim",
            "slug": "r13-carbon-fiber-rim"
          },
          {
            "name": "R14 carbon fiber rim",
            "slug": "r14-carbon-fiber-rim"
          },
          {
            "name": "R15 carbon fiber rim",
            "slug": "r15-carbon-fiber-rim"
          },
          {
            "name": "R16 carbon fiber rim",
            "slug": "r16-carbon-fiber-rim"
          },
          {
            "name": "R17 carbon fiber rim",
            "slug": "r17-carbon-fiber-rim"
          },
          {
            "name": "R18 carbon fiber rim",
            "slug": "r18-carbon-fiber-rim"
          },
          {
            "name": "R19 carbon fiber rim",
            "slug": "r19-carbon-fiber-rim"
          },
          {
            "name": "R20 carbon fiber rim",
            "slug": "r20-carbon-fiber-rim"
          },
          {
            "name": "R21 carbon fiber rim",
            "slug": "r21-carbon-fiber-rim"
          },
          {
            "name": "R22 carbon fiber rim",
            "slug": "r22-carbon-fiber-rim"
          }
        ]
      },
      {
        "name": "Forged rim wheels",
        "slug": "forged-rim-wheels",
        "subcategories": [
          {
            "name": "R12 forged rim",
            "slug": "r12-forged-rim"
          },
          {
            "name": "R13 forged rim",
            "slug": "r13-forged-rim"
          },
          {
            "name": "R14 forged rim",
            "slug": "r14-forged-rim"
          },
          {
            "name": "R15 forged rim",
            "slug": "r15-forged-rim"
          },
          {
            "name": "R16 forged rim",
            "slug": "r16-forged-rim"
          },
          {
            "name": "R17 forged rim",
            "slug": "r17-forged-rim"
          },
          {
            "name": "R18 forged rim",
            "slug": "r18-forged-rim"
          },
          {
            "name": "R19 forged rim",
            "slug": "r19-forged-rim"
          },
          {
            "name": "R20 forged rim",
            "slug": "r20-forged-rim"
          },
          {
            "name": "R21 forged rim",
            "slug": "r21-forged-rim"
          },
          {
            "name": "R22 forged rim",
            "slug": "r22-forged-rim"
          }
        ]
      },
      {
        "name": "Non-original wheel hub/cap/trim",
        "slug": "non-original-wheel-hubcaptrim",
        "subcategories": [
          {
            "name": "R12 wheel hub/cap/trim",
            "slug": "r12-wheel-hubcaptrim"
          },
          {
            "name": "R13 wheel hub/cap/trim",
            "slug": "r13-wheel-hubcaptrim"
          },
          {
            "name": "R14 wheel hub/cap/trim",
            "slug": "r14-wheel-hubcaptrim"
          },
          {
            "name": "R15 wheel hub/cap/trim",
            "slug": "r15-wheel-hubcaptrim"
          },
          {
            "name": "R16 wheel hub/cap/trim",
            "slug": "r16-wheel-hubcaptrim"
          },
          {
            "name": "R17 wheel hub/cap/trim",
            "slug": "r17-wheel-hubcaptrim"
          },
          {
            "name": "R18 wheel hub/cap/trim",
            "slug": "r18-wheel-hubcaptrim"
          },
          {
            "name": "R19 wheel hub/cap/trim",
            "slug": "r19-wheel-hubcaptrim"
          },
          {
            "name": "R20 wheel hub/cap/trim",
            "slug": "r20-wheel-hubcaptrim"
          }
        ]
      },
      {
        "name": "Original wheel hub/cap/trim",
        "slug": "original-wheel-hubcaptrim",
        "subcategories": [
          {
            "name": "R12 wheel hub/cap/trim",
            "slug": "r12-wheel-hubcaptrim"
          },
          {
            "name": "R13 wheel hub/cap/trim",
            "slug": "r13-wheel-hubcaptrim"
          },
          {
            "name": "R14 wheel hub/cap/trim",
            "slug": "r14-wheel-hubcaptrim"
          },
          {
            "name": "R15 wheel hub/cap/trim",
            "slug": "r15-wheel-hubcaptrim"
          },
          {
            "name": "R16 wheel hub/cap/trim",
            "slug": "r16-wheel-hubcaptrim"
          },
          {
            "name": "R17 wheel hub/cap/trim",
            "slug": "r17-wheel-hubcaptrim"
          },
          {
            "name": "R18 wheel hub/cap/trim",
            "slug": "r18-wheel-hubcaptrim"
          },
          {
            "name": "R19 wheel hub/cap/trim",
            "slug": "r19-wheel-hubcaptrim"
          },
          {
            "name": "R20 wheel hub/cap/trim",
            "slug": "r20-wheel-hubcaptrim"
          }
        ]
      },
      {
        "name": "Spare wheels",
        "slug": "spare-wheels",
        "subcategories": [
          {
            "name": "R 19 spare wheel",
            "slug": "r-19-spare-wheel"
          },
          {
            "name": "R 20 spare wheel",
            "slug": "r-20-spare-wheel"
          },
          {
            "name": "R12 spare wheel",
            "slug": "r12-spare-wheel"
          },
          {
            "name": "R13 spare wheel",
            "slug": "r13-spare-wheel"
          },
          {
            "name": "R14 spare wheel",
            "slug": "r14-spare-wheel"
          },
          {
            "name": "R15 spare wheel",
            "slug": "r15-spare-wheel"
          },
          {
            "name": "R16 spare wheel",
            "slug": "r16-spare-wheel"
          },
          {
            "name": "R17 spare wheel",
            "slug": "r17-spare-wheel"
          },
          {
            "name": "R18 spare wheel",
            "slug": "r18-spare-wheel"
          }
        ]
      },
      {
        "name": "Spiked C winter tires",
        "slug": "spiked-c-winter-tires",
        "subcategories": [
          {
            "name": "R12 C winter/snow tires with studs",
            "slug": "r12-c-wintersnow-tires-with-studs"
          },
          {
            "name": "R13 C winter/snow tires with studs",
            "slug": "r13-c-wintersnow-tires-with-studs"
          },
          {
            "name": "R14 C winter/snow tires with studs",
            "slug": "r14-c-wintersnow-tires-with-studs"
          },
          {
            "name": "R15 C winter/snow tires with studs",
            "slug": "r15-c-wintersnow-tires-with-studs"
          },
          {
            "name": "R16 C winter/snow tires with studs",
            "slug": "r16-c-wintersnow-tires-with-studs"
          },
          {
            "name": "R17 C winter/snow tires with studs",
            "slug": "r17-c-wintersnow-tires-with-studs"
          },
          {
            "name": "R18 C winter/snow tires with studs",
            "slug": "r18-c-wintersnow-tires-with-studs"
          }
        ]
      },
      {
        "name": "Steel rim wheels",
        "slug": "steel-rim-wheels",
        "subcategories": [
          {
            "name": "R12 steel rim",
            "slug": "r12-steel-rim"
          },
          {
            "name": "R13 steel rim",
            "slug": "r13-steel-rim"
          },
          {
            "name": "R14 steel rim",
            "slug": "r14-steel-rim"
          },
          {
            "name": "R15 steel rim",
            "slug": "r15-steel-rim"
          },
          {
            "name": "R16 steel rim",
            "slug": "r16-steel-rim"
          },
          {
            "name": "R17 steel rim",
            "slug": "r17-steel-rim"
          }
        ]
      },
      {
        "name": "Summer tires",
        "slug": "summer-tires",
        "subcategories": [
          {
            "name": "R12 summer tire",
            "slug": "r12-summer-tire"
          },
          {
            "name": "R13 summer tire",
            "slug": "r13-summer-tire"
          },
          {
            "name": "R14 summer tire",
            "slug": "r14-summer-tire"
          },
          {
            "name": "R15 summer tire",
            "slug": "r15-summer-tire"
          },
          {
            "name": "R16 summer tire",
            "slug": "r16-summer-tire"
          },
          {
            "name": "R17 summer tire",
            "slug": "r17-summer-tire"
          },
          {
            "name": "R18 summer tire",
            "slug": "r18-summer-tire"
          },
          {
            "name": "R19 summer tire",
            "slug": "r19-summer-tire"
          },
          {
            "name": "R20 summer tire",
            "slug": "r20-summer-tire"
          },
          {
            "name": "R21 summer tire",
            "slug": "r21-summer-tire"
          },
          {
            "name": "R22 summer tire",
            "slug": "r22-summer-tire"
          }
        ]
      },
      {
        "name": "Wheel caps",
        "slug": "wheel-caps",
        "subcategories": [
          {
            "name": "Non-original wheel cap",
            "slug": "non-original-wheel-cap"
          },
          {
            "name": "Original wheel cap",
            "slug": "original-wheel-cap"
          }
        ]
      },
      {
        "name": "Wheel screws/nuts",
        "slug": "wheel-screwsnuts",
        "subcategories": [
          {
            "name": "Anti-theft wheel nuts and lock",
            "slug": "anti-theft-wheel-nuts-and-lock"
          },
          {
            "name": "Nuts/bolts",
            "slug": "nutsbolts"
          },
          {
            "name": "Wheel nut cap/cover",
            "slug": "wheel-nut-capcover"
          }
        ]
      },
      {
        "name": "Wheel spacers",
        "slug": "wheel-spacers",
        "subcategories": [
          {
            "name": "Wheel spacers",
            "slug": "wheel-spacers"
          }
        ]
      },
      {
        "name": "Winter/snow tires",
        "slug": "wintersnow-tires",
        "subcategories": [
          {
            "name": "R12 winter tire",
            "slug": "r12-winter-tire"
          },
          {
            "name": "R13 winter tire",
            "slug": "r13-winter-tire"
          },
          {
            "name": "R14 winter tire",
            "slug": "r14-winter-tire"
          },
          {
            "name": "R15 winter tire",
            "slug": "r15-winter-tire"
          },
          {
            "name": "R16 winter tire",
            "slug": "r16-winter-tire"
          },
          {
            "name": "R17 winter tire",
            "slug": "r17-winter-tire"
          },
          {
            "name": "R18 winter tire",
            "slug": "r18-winter-tire"
          },
          {
            "name": "R19 winter tire",
            "slug": "r19-winter-tire"
          },
          {
            "name": "R20 winter tire",
            "slug": "r20-winter-tire"
          },
          {
            "name": "R21 winter tire",
            "slug": "r21-winter-tire"
          },
          {
            "name": "R22 winter tire",
            "slug": "r22-winter-tire"
          }
        ]
      },
      {
        "name": "Winter/snow tires with studs",
        "slug": "wintersnow-tires-with-studs",
        "subcategories": [
          {
            "name": "R12 winter/snow tires with studs",
            "slug": "r12-wintersnow-tires-with-studs"
          },
          {
            "name": "R13 winter/snow tires with studs",
            "slug": "r13-wintersnow-tires-with-studs"
          },
          {
            "name": "R14 winter/snow tires with studs",
            "slug": "r14-wintersnow-tires-with-studs"
          },
          {
            "name": "R15 winter/snow tires with studs",
            "slug": "r15-wintersnow-tires-with-studs"
          },
          {
            "name": "R16 winter/snow tires with studs",
            "slug": "r16-wintersnow-tires-with-studs"
          },
          {
            "name": "R17 winter/snow tires with studs",
            "slug": "r17-wintersnow-tires-with-studs"
          },
          {
            "name": "R18 winter/snow tires with studs",
            "slug": "r18-wintersnow-tires-with-studs"
          },
          {
            "name": "R19 winter/snow tires with studs",
            "slug": "r19-wintersnow-tires-with-studs"
          },
          {
            "name": "R20 winter/snow tires with studs",
            "slug": "r20-wintersnow-tires-with-studs"
          },
          {
            "name": "R21 winter/snow tires with studs",
            "slug": "r21-wintersnow-tires-with-studs"
          },
          {
            "name": "R22 winter/snow tires with studs",
            "slug": "r22-wintersnow-tires-with-studs"
          }
        ]
      }
    ]
  }
]


const seed = async () => {
    const payload = await getPayload({ config });

    // Recursive upsert: create if missing, else reuse existing; then recurse into children
    const upsertCategory = async (node: any, parentId?: string) => {
        const slug = node.slug;

        // check for existing by slug
        const found = await payload.find({
            collection: 'categories' as any,
            where: { slug: { equals: slug } },
            limit: 1,
        }) as any;

        let record: any;
        if (found?.docs && found.docs.length) {
            record = found.docs[0];
            // ensure parent is set (optional)
            if (parentId && (!record.parent || record.parent !== parentId)) {
                try {
                    record = await payload.update({
                        collection: 'categories' as any,
                        id: record.id,
                        data: { parent: parentId },
                    });
                } catch (err) {
                    // ignore update errors and keep existing record
                }
            }
        } else {
            record = await payload.create({
                collection: 'categories' as any,
                data: {
                    name: node.name,
                    slug: slug,
                    ...(parentId ? { parent: parentId } : {}),
                },
            });
        }

        // Recurse for children
        for (const child of node.subcategories || []) {
            await upsertCategory(child, record.id);
        }
    };

    for (const category of categories) {
        try {
            await upsertCategory(category);
        } catch (err) {
            console.error('Failed to upsert category', category.slug, err);
        }
    }
};
 
await seed();
 
process.exit();