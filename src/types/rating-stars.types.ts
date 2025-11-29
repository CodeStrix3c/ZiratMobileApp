export type RatingStarsProps = {
  rating: number;
  size?: number;
  editable?: boolean;
  onChange?: (rating: number) => void;
};