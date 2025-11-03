export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  website: string;
  image: string;

  public constructor(id: number, name: string, channel: string, seasons: number, description: string, website: string, image: string) {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.description = description;
    this.website = website;
    this.image = image;
  }
}