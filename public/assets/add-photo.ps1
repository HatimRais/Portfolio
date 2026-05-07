# Helper: choisir une photo et l'enregistrer comme photo.jpg pour le CV
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$dlg = New-Object System.Windows.Forms.OpenFileDialog
$dlg.Title = "Choisissez votre photo de profil"
$dlg.Filter = "Images (*.jpg;*.jpeg;*.png;*.webp)|*.jpg;*.jpeg;*.png;*.webp|Tous les fichiers (*.*)|*.*"
$dlg.InitialDirectory = [Environment]::GetFolderPath("MyPictures")

if ($dlg.ShowDialog() -ne [System.Windows.Forms.DialogResult]::OK) {
    Write-Host "Annule." -ForegroundColor Yellow
    exit
}

$dest = Join-Path $PSScriptRoot "photo.jpg"

try {
    $img = [System.Drawing.Image]::FromFile($dlg.FileName)
    $img.Save($dest, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $img.Dispose()
    Write-Host "OK : photo enregistree -> $dest" -ForegroundColor Green
    Write-Host "Rafraichissez votre navigateur (Live Server) pour voir le CV mis a jour."
} catch {
    Write-Host "Erreur : $_" -ForegroundColor Red
}
