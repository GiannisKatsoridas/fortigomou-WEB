import {HttpHeaders} from '@angular/common/http';

export const PersonnelArray = ['Personnel for packaging', 'Personnel for loading', 'Personnel for unloading', 'Fork Lift', 'Furniture and electrical equipment packaging', 'Personnel for dissassembly', 'Personnel for unpacking', 'Technician for electrical equipment', 'Technician for Air Condition'];

export const PropertyType = ['Studio', '2 Bedroom Apartment', '3 Bedroom Apartment', '4 Bedroom Apartment', '5 Bedroom Apartment', 'Maisonette'];

export const LivingRoom = [
  'Corner Sofa',
  'Sofa (2 seater)',
  'Sofa (3 seater)',
  'Armchair',
  'TV',
  'TV Stand',
  'Piano Wall 250kg',
  'Section',
  'Buffet',
  'Coffee Table Small',
  'Coffee Table Large',
  'Dinning Table',
  'Dinning Chairs',
  'Antique Furniture',
  'Showcases'
];

export const Kitchen = [
  'Refrigerator',
  'Stove',
  'Microwave Oven',
  'Plates',
  'Table',
  'Chairs',
  'Freezer Small',
  'Freezer Large',
  'Double Door Refrigerator'
];

export const Bedroom = [
  'Double Bed',
  'Single Bed',
  'Nightstands',
  'Closet Small',
  'Closet Large',
  'Drawers',
  'Baby Cot',
  'Bathroom Furniture With Mirror',
  'Bunk Bed'
];

export const Office = [
  'Large Desk',
  'Small Desk',
  'Desk Chair',
  'Safe',
  'Bookcase',
  'Drawers Small',
  'Drawers Large',
  'Printer',
  'Copier',
  'Computer'
];

export const Bathroom = [
  'Washing Machine',
  'Bathroom Furniture',
  'Dryer'
];

export const Garage = [
  'Workbench Small',
  'Workbench Large',
  'Shelves',
  'Gym Equipment',
  'Bicycles',
  'Stairs',
  'Gym Equipment Small',
  'Gym Equipment Medium',
  'Gym Equipment Large'
];

export const Outdoor = [
  'Pots',
  'Garden Table',
  'Garden Chairs',
  'Grill / Barbecue',
  'Lawnmower',
  'Shoe Cabinet',
  'Bikes'
];

export const Various = [
  'Large Aquarium',
  'Small Aquarium',
  'Air Condition Indoor Unit',
  'Air Condition Outdoor Unit',
  'Musical Instruments',
  'Paintings',
  'Statue Big',
  'Statue Small',
  'Ceiling Lights',
  'Floor Lights',
  'Pushchairs',
  'Hanger',
  'Packages / Bags',
  'Pellet / Wood Stove',
  'Mirrors',
  'Carpets',
  'Vacuum Cleaner'
];

export const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
