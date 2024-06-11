const jsonFiles = ['../data/ExpertShop.json', '../data/BZonesShop.json', '../data/JayaPCShop.json', '../data/EnterShop.json', '../data/AgresShop.json', '../data/ImbaPCShop.json', '../data/ITShop.json', '../data/PCRakitanShop.json', '../data/RakitanOfficialShop.json'];

    async function loadTable() {
        let allProducts = [];

        try {
            const dataArrays = await Promise.all(jsonFiles.map(file => fetch(file).then(response => response.json())));
            dataArrays.forEach((data, index) => {
                for (const category in data) {
                    if (data.hasOwnProperty(category)) {
                        data[category].forEach(product => {
                            // product.store = ['ExpertShop', 'BZonesShop', 'JayaPCShop', ''][index];
                            product.store = ['ExpertShop', 'BZonesShop', 'JayaPCShop', 'EnterShop', 'AgresShop', 'ImbaPCShop', 'ITShop', 'PCRakitanShop', 'RakitanOfficialShop'][index];
                            allProducts.push(product);
                        });
                    }
                }
            });

            // Configure AG Grid
            const gridOptions = {
                columnDefs: [
                    { headerName: "Image", field: "tautan_image", cellRenderer: function(params) {
                        return `<img src="${params.value}" alt="Product Image" style="height: 50px;" />`;
                    }},
                    { headerName: "Name", field: "name" },
                    { headerName: "Price", field: "price" },
                    { headerName: "Rating", field: "rating" },
                    { headerName: "Sold", field: "sold" },
                    { headerName: "Stock", field: "stock" },
                    { headerName: "Store", field: "store" },
                    { headerName: "Link", field: "tautan", cellRenderer: function(params) {
                        return `<a href="${params.value}" target="_blank" class="btn btn-primary">View Product</a>`;
                    }}
                ],
                rowData: allProducts,
                pagination: true,
                paginationPageSize: 10,
                domLayout: 'autoHeight'
            };

            // Create the grid passing in the div to use together with the columns & data we want to use
            const eGridDiv = document.querySelector('#myGrid');
            new agGrid.Grid(eGridDiv, gridOptions);

            // Add quick filter
            const searchBox = document.getElementById('searchBox');
            searchBox.addEventListener('input', function() {
                gridOptions.api.setQuickFilter(searchBox.value);
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    document.addEventListener('DOMContentLoaded', loadTable);