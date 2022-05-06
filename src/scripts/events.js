
// Event: Enter on search input
document.getElementById('search-input').addEventListener('keyup', function(e) {
	if (e.key === 'Enter') updateRecipes()
})