var stages = {
    1 : ["Turn off lights when leaving a room.", "Take shorter showers.", "Use a reusable water bottle."],
    2 : ["Walk or bike for short trips.", "Use a reusable shopping bag.", "Recycle paper, plastic, and glass."],
    3 : ["Use public transportation.", "Say no to single-use plastic straws.", "Turn off the tap while brushing your teeth."],
    4 : ["Unplug electronics when not in use.", "Bring your own reusable bags when shopping.", "Reduce food waste by planning meals."],
    5 : ["Bring your own container for takeout food.", "Use recycled paper products.", "Recycle old electronics properly."],
    6 : ["Use public transportation, walk, or bike instead of driving.", "Use a reusable water bottle and coffee cup.", "Store food properly to extend its shelf life."],
    7 : ["Print double-sided or use scrap paper for notes.", "Avoid disposable plates and utensils.", "Buy products with minimal packaging."],
    8 : ["Say no to single-use plastic cutlery.", "Use eco-friendly toiletries.", "Use reusable containers for packed lunches."],
    9 : ["Choose clothing made from sustainable materials.", "Turn off lights and electronics when leaving a room.", "Plan meals to use up leftovers."],
    10 : ["Reduce screen brightness and screen time.", "Buy second-hand clothing.", "Donate or sell functional electronics you no longer need."],
    11 : ["Choose biodegradable soaps and cleaning products.", "Use a stainless steel or glass water bottle.", "Invest in quality, durable products."],
    12 : ["Carpool with friends or colleagues.", "Avoid buying over-packaged products.", "Use energy-efficient light bulbs."],
    13 : ["Air dry clothes instead of using a dryer.", "Pack your lunch in a reusable container.", "Use cloth napkins instead of paper ones."],
    14 : ["Make your own DIY personal care products.", "Use electronic devices for longer before upgrading.", "Avoid using harmful pesticides and chemicals."],
    15 : ["Turn off lights and electronics when not in use.", "Mend or alter clothes instead of discarding them.", "Use natural light whenever possible."],
    16 : ["Organize a neighborhood cleanup day.", "Practice upcycling - turning old items into new creations.", "Delete unnecessary files to free up storage space."],
    17 : ["Reflect on your purchases before buying.", "Opt for a bamboo toothbrush.", "Choose products with minimal plastic packaging."],
    18 : ["Use public transportation or walk when exploring a new place.", "Organize clothing swaps with friends.", "Reduce meat consumption."],
    19 : ["Choose products made from sustainable materials.", "Compost food scraps.", "Collect rainwater for plants."],
    20 : ["Use natural light during the day.", "Donate unwanted items to charity.", "Only run the dishwasher and washing machine with full loads."],
    21 : ["Use a bucket of water to wash your car instead of a hose.", "Repair items instead of replacing them.", "Buy second-hand or vintage items."],
    22 : ["Wash laundry in cold water.", "Eat meatless meals.", "Buy products in bulk to minimize packaging waste."],
    23 : ["Buy furniture made from sustainable materials.", "Repair electronics instead of replacing them.", "Support renewable energy sources."],
    24 : ["Participate in workplace recycling programs.", "Support local businesses and artisans.", "Freeze excess produce before it goes bad."],
    25 : ["Start a compost bin for food scraps.", "Install energy-efficient appliances.", "Avoid impulse buying and prioritize necessities."],
    26 : ["Practice gratitude for the items you have.", "Participate in local tree planting programs.", "Upgrade to LED light bulbs."],
    27 : ["Declutter and donate items you no longer need.", "Support local renewable energy projects.", "Choose eco-friendly crafting materials."],
    28 : ["Purchase products with a long lifespan.", "Encourage your community to adopt sustainable practices.", "Donate non-perishable items to food banks."],
    29 : ["Borrow books from libraries instead of buying new ones.", "Use fans and open windows for natural ventilation.", "Use a bike or scooter for short trips."],
    30 : ["Print double-sided documents.", "Choose sustainable party favors and gifts.", "Bring your own reusable container for leftovers."],
    31 : ["Set printers and copiers to default to black and white.", "Choose restaurants that prioritize sustainable practices.", "Use eco-friendly phone and tablet cases."],
    32 : ["Encourage paperless meetings and note-taking.", "Use reusable decorations for parties and events.", "Turn off Wi-Fi and electronics when not in use."],
    33 : ["Defrost food in the refrigerator instead of using running water.", "Learn to repair or refurbish items.", "Volunteer for local environmental organizations."],
    34 : ["Rinse vegetables in a bowl of water instead of under a tap.", "Choose e-books or audiobooks to reduce paper consumption.", "Opt for electronic invitations instead of paper ones."],
    35 : ["Collect water used for rinsing fruits and vegetables to water plants.", "Telecommute or work from home when possible.", "Research brands with ethical and sustainable practices."],
    36 : ["Participate in local conservation efforts.", "Set your computer to energy-saving mode.", "Install a low-flow showerhead."],
    37 : ["Plan errands to reduce unnecessary driving.", "Support local and sustainable farmers' markets.", "Participate in a carbon offset program."],
    38 : ["Opt for digital receipts instead of paper ones.", "Choose seasonal and locally grown produce.", "Attend local environmental events."],
    39 : ["Use a broom instead of a hose to clean driveways and sidewalks.", "Dispose of electronic waste properly.", "Join a community garden or urban farming project."],
    40 : ["Choose sustainably sourced seafood.", "Use homemade cleaning solutions (vinegar, baking soda, etc.).", "Participate in or organize eco-friendly workshops."],
    41 : ["Reduce digital clutter by organizing files and emails.", "Opt for reusable cleaning cloths instead of disposable ones.", "Support sustainable and ethical art supplies."],
    42 : ["Use lids when cooking to retain heat and reduce cooking time.", "Turn off the tap while lathering during handwashing.", "Attend renewable energy workshops or seminars."],
    43 : ["Choose energy-efficient cooking appliances.", "Limit shower time and install a low-flow showerhead.", "Share information about renewable energy on social media."],
    44 : ["Use a microwave or toaster oven for smaller cooking tasks.", "Make homemade holiday decorations from recycled materials.", "Join or support organizations advocating for renewable energy policies."],
    45 : ["Plant a tree", "Wrap gifts using reusable fabric or newspaper.", "Support brands that use sustainable and recyclable packaging."]
};

// Restart Game
function restartGame() {
    window.localStorage.setItem("stageNo", 1);
    window.localStorage.setItem("missionNo", 0);
    window.localStorage.setItem("totalPts", 0);
    window.location.reload();
    closingModal('yourModal');
}

// Create a list containing progress.
if (window.localStorage.getItem('stageNo') == null || window.localStorage.getItem('missionNo') == null || window.localStorage.getItem('totalPts') == null) {
    window.localStorage.setItem("stageNo", 1);
    window.localStorage.setItem("missionNo", 0);
    window.localStorage.setItem("totalPts", 0);
    document.getElementById("yourModal").style.display = "block";
}

// Display of Stage
function GenerateStage() {
    document.getElementById("stageNumber").innerHTML = "Stage " + window.localStorage.getItem('stageNo');
}

// Display of image
function GenerateImage() {
    var x = document.getElementById("myImg");
    x.setAttribute("src", "images/image" + window.localStorage.getItem('stageNo') + ".png");
}

// Display of Points
function GeneratePoints() {
    document.getElementById("points").innerHTML = window.localStorage.getItem('totalPts') + "<img src = 'images/plantoken.png' class = 'plantoken' height='42px'>";
}

// Display of Missions
function GenerateMissions() {
    var dvTable = document.getElementById("dvTable");

    //Retrieve progress
    var stageNo = parseInt(window.localStorage.getItem('stageNo'));
    var missionNo = parseInt(window.localStorage.getItem('missionNo'));
    var totalPts = parseInt(window.localStorage.getItem('totalPts'));

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";
    table.id = "scoretable";

    //Add the header row.
    var row = table.insertRow(-1);
    tablec = ["No.", "Sustainability Missions"]
    for (var i = 0; i < tablec.length; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = tablec[i];
        row.appendChild(headerCell);
    }

    // Add contents of table
    var newRow
    var newCell

    console.log(stages[stageNo].length)
    for (var i = 0; i < stages[stageNo].length; i++) {
        // Insert a row at the end of the table
        newRow = table.insertRow(-1);
        newRow.id = "refrow" + i;
    
        // Insert a cell in the row at index 0
        newCell = newRow.insertCell(0);
        newCell.innerHTML = i + 1;

        newCell = newRow.insertCell(1);
        newCell.innerHTML = stages[stageNo][i];

        if (missionNo > i) {
            newCell.style.textDecoration = "line-through";
        }

        if (i == missionNo) {
            newRow.onclick = function(){
                if (missionNo != stages[stageNo].length - 1) {
                    window.localStorage.setItem("missionNo", missionNo + 1);
                    window.localStorage.setItem("totalPts", totalPts + 20);
                    window.location.reload()
                } else {
                    window.localStorage.setItem("stageNo", stageNo + 1);
                    window.localStorage.setItem("missionNo", 0);
                    window.localStorage.setItem("totalPts", totalPts + 20);
                    window.location.reload()
                }
            }
        }
    }

    // Adding entire table into div
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}

// Build Introduction modal
var modal2 = document.getElementById("yourModal");
var btn2 = document.getElementById("menu");

btn2.onclick = function() {
    modal2.style.display = "block";
}

// Build Plantopia modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("signboard");

btn.onclick = function() {
    modal.style.display = "block";

    if (parseInt(window.localStorage.getItem('stageNo')) <= 10) {
        var y = document.getElementById("gardens");
        y.setAttribute("src", "images/garden1.png");
    } else if (parseInt(window.localStorage.getItem('stageNo')) <= 15) {
        var y = document.getElementById("gardens");
        y.setAttribute("src", "images/garden2.png");
    } else if (parseInt(window.localStorage.getItem('stageNo')) <= 20) {
        var y = document.getElementById("gardens");
        y.setAttribute("src", "images/garden3.png");
    } else if (parseInt(window.localStorage.getItem('stageNo')) <= 25) {
        var y = document.getElementById("gardens");
        y.setAttribute("src", "images/garden4.png");
    } else if (parseInt(window.localStorage.getItem('stageNo')) <= 35) {
        var y = document.getElementById("gardens");
        y.setAttribute("src", "images/garden5.png");
    } else if (parseInt(window.localStorage.getItem('stageNo')) <= 45) {
        var y = document.getElementById("gardens");
        y.setAttribute("src", "images/garden6.png");
    } else {
        var y = document.getElementById("gardens");
        y.setAttribute("src", "images/garden7.png");
    }
}

// When the user clicks on <span> (x), close the modal
function closingModal(modalName) {
    document.getElementById(modalName).style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modal2) {
    modal.style.display = "none";
    modal2.style.display = "none";
  }
}