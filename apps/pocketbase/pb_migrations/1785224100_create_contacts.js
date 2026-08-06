/// <reference path="../database-types.d.ts" />

migrate(
  (app) => {
    const collection = new Collection({
      type: "base",
      name: "contacts",
      listRule: null,
      viewRule: null,
      createRule: "",
      updateRule: null,
      deleteRule: null,
      fields: [
        { type: "text", name: "name", required: true, max: 200 },
        { type: "email", name: "email", required: true },
        { type: "text", name: "phone", max: 50 },
        { type: "text", name: "message", required: true, max: 5000 },
        { type: "autodate", name: "created", onCreate: true },
      ],
    });
    app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("contacts");
    app.delete(collection);
  }
);
