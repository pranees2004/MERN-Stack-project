const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 7777;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
    });

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://praneeschandhrrany:mathiyarasu@cluster0.tyczd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const productcollection = client.db("KFC").collection("chicken");
    app.post("/product", async (req, res) => {
        const data = req.body;
        const result = await productcollection.insertOne(data);
        res.send(result);
        });
        app.get("/allproducts",async(req,res)=>{
            const chicken = productcollection.find();
            const result = await chicken.toArray();
            res.send(result);
        });
        app.get("/product/:id", async (req, res) => {
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)};
            const result = await productcollection.findOne(filter);
            res.send (result);
        });
            app.patch("/product/:id", async (req, res) => {
                const id = req.params.id;
                const filter = {_id: new ObjectId(id)};
                const update = req.body;
                const updateDoc = {$set:{...update}};
                const option = {upsert: true};
                const result = await productcollection.updateOne(filter,updateDoc,option);
                res.send(result);
                });
                app.delete("/product/:id", async (req, res) => {
                    const id = req.params.id;
                    const filter = {_id: new ObjectId(id)};
                    const result = await productcollection.deleteOne(filter);
                    res.status(200)
                    .json({success: true,message:"data deleted successfully",result})
                    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });