import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ozj820p6",
  dataset: "production",
  apiVersion: "2023-03-16",
  useCdn: true,
  token:
    "skRdt7CCTpTeWlhaAOZqMlhwNprm0KIkyyioIKs3HY7pdBi75ym214l3d27yJscdAsyx9sNxtOYe3MBG747cxaBbqKpSbRo2Sh2cnbshRj9dLhZQrqY7flgTPTJKbQsr2O1eguu2b82d661gv8tzCaN1nrP5vKAkt6qw3VAMwQ5YrLXlER2e",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
