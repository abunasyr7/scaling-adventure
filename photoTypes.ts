// Определяем типы для камер, установленных на марсоходе
interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

// Определяем типы для камер в списке камер марсохода
interface RoverCamera {
  name: string;
  full_name: string;
}

// Определяем типы для марсохода
interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  cameras: RoverCamera[];
}

// Определяем типы для фотографии
interface Photo {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

// Определяем типы для ответа API, содержащего массив фотографий
export interface MarsPhotosResponse {
  photos: Photo[];
}
