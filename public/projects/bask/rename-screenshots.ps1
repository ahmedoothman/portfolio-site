# PowerShell script to rename screenshots automatically
# Run this in the bask folder after downloading screenshots

Get-ChildItem -Path "." -Filter "*.png" -Exclude "card-image.png" |
Where-Object { $_.Name -notlike "screenshot-*.png" } |
Sort-Object LastWriteTime |
ForEach-Object -Begin { $counter = 1 } -Process {
    $newName = "screenshot-$counter.png"
    Rename-Item $_.FullName -NewName $newName
    Write-Host "Renamed $($_.Name) to $newName"
    $counter++
}